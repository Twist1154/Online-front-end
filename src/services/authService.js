// src/services/authService.js
import axiosInstance from '../axiosConfig';

// Function to handle user login
export const loginUser = async (email, password) => {
    try {
        // Send POST request with email and password as query parameters
        const response = await axiosInstance.post('/users/login', null, {
            params: { email, password },
        });
        
        // Log successful login
        console.log('Login successful:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Handle HTTP error responses
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
            throw new Error(error.response.data);
        } else if (error.request) {
            // Handle no response from server
            console.error('No response received:', error.request);
            throw new Error('No response received from server');
        } else {
            // Handle error in setting up the request
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
};
