import axiosInstance from '../axiosConfig';

// Create a new address
export const createAddress = async (address) => {
    try {
        const response = await axiosInstance.post('/address/create', address);
        // Debug statement for success
        console.debug('Address created successfully:', response.data);
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
        console.error('Error creating address:', error);
        throw error;
    }
};

// Read an address by ID
export const readAddress = async (id) => {
    try {
        const response = await axiosInstance.get(`/address/read/${id}`);
        // Debug statement for success
        console.debug('Address read successfully:', response.data);
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
        console.error('Error reading address:', error);
        throw error;
    }
};

// Update an existing address
export const updateAddress = async (address) => {
    try {
        const response = await axiosInstance.post('/address/update', address);
        // Debug statement for success
        console.debug('Address updated successfully:', response.data);
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
        console.error('Error updating address:', error);
        throw error;
    }
};

// Get all addresses
export const getAllAddresses = async () => {
    try {
        const response = await axiosInstance.get('/address/getAll');
        // Debug statement for success
        console.debug('Addresses fetched successfully:', response.data);
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
        console.error('Error fetching addresses:', error);
        throw error;
    }
};

// Delete an address by ID
export const deleteAddressById = async (id) => {
    try {
        await axiosInstance.delete(`/address/deleteById/${id}`);
        // Debug statement for success
        console.debug('Address deleted successfully');
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
        console.error('Error deleting address:', error);
        throw error;
    }
};
