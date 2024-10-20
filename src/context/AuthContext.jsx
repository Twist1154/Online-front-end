// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { loginUser, findUserByEmail } from '../services/authService'; 
import { openDB } from 'idb'; // Import the idb library

// Open or create an IndexedDB database and an object store
const openDatabase = async () => {
    return openDB('AuthDB', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('users')) {
                db.createObjectStore('users');
            }
        },
    });
};

// Save user to IndexedDB
const saveUserToIndexedDB = async (user) => {
    const db = await openDatabase();
    await db.put('users', user, 'currentUser');
};

// Get user from IndexedDB
const getUserFromIndexedDB = async () => {
    const db = await openDatabase();
    return db.get('users', 'currentUser');
};

// Remove user from IndexedDB
const removeUserFromIndexedDB = async () => {
    const db = await openDatabase();
    await db.delete('users', 'currentUser');
};

// AuthContext creation
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const savedUser = await getUserFromIndexedDB();
            
            if (savedUser) {
                setCurrentUser(savedUser);
            }
        };

        fetchUser();
    }, []);

    const login = async (email, password) => {
        try {
            // Perform login
            await loginUser(email, password);
    
            // Fetch user data (assuming the backend returns a single user object)
            const user = await findUserByEmail(email);
    
            console.debug('User retrieved from findUserByEmail:', user); // Debug log to check the returned user
    
            if (user) {
                setCurrentUser(user); // Set current user in state
                await saveUserToIndexedDB(user); // Save user to IndexedDB
                navigate('/'); // Redirect after successful login
            } else {
                throw new Error('User not found'); // Handle null response
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };
    
    

    const logout = async () => {
        await removeUserFromIndexedDB(); // Remove user from IndexedDB
        setCurrentUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use Auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
