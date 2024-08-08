import axiosInstance from '../axiosConfig';

// Create a new user
export const createUser = async (user) => {
    try {
        const response = await axiosInstance.post('/user/create', user);
        // Debug statement for success
        console.debug('User created successfully:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Debug statements for error responses
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
        } else if (error.request) {
            // Debug statement for no response
            console.error('No response received:', error.request);
        } else {
            // Debug statement for setup errors
            console.error('Error setting up request:', error.message);
        }
        console.error('Error creating user:', error);
        throw error;
    }
};

// Read a user by ID
export const readUser = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/read/${id}`);
        // Debug statement for success
        console.debug('User read successfully:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Debug statements for error responses
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
        } else if (error.request) {
            // Debug statement for no response
            console.error('No response received:', error.request);
        } else {
            // Debug statement for setup errors
            console.error('Error setting up request:', error.message);
        }
        console.error('Error reading user:', error);
        throw error;
    }
};

// Update an existing user
export const updateUser = async (user) => {
    try {
        const response = await axiosInstance.post('/user/update', user);
        // Debug statement for success
        console.debug('User updated successfully:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Debug statements for error responses
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
        } else if (error.request) {
            // Debug statement for no response
            console.error('No response received:', error.request);
        } else {
            // Debug statement for setup errors
            console.error('Error setting up request:', error.message);
        }
        console.error('Error updating user:', error);
        throw error;
    }
};

// Get all users
export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('/user/getAll');
        // Debug statement for success
        console.debug('Users fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Debug statements for error responses
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
        } else if (error.request) {
            // Debug statement for no response
            console.error('No response received:', error.request);
        } else {
            // Debug statement for setup errors
            console.error('Error setting up request:', error.message);
        }
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Delete a user by ID
export const deleteUserById = async (id) => {
    try {
        await axiosInstance.delete(`/user/deleteById/${id}`);
        // Debug statement for success
        console.debug('User deleted successfully');
    } catch (error) {
        if (error.response) {
            // Debug statements for error responses
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
        } else if (error.request) {
            // Debug statement for no response
            console.error('No response received:', error.request);
        } else {
            // Debug statement for setup errors
            console.error('Error setting up request:', error.message);
        }
        console.error('Error deleting user:', error);
        throw error;
    }
};
