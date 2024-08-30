import axiosInstance from '../axiosConfig';

export const createProduct = async (productImage) => {
    try{
        const response = await axiosInstance.post('/productImage/create', productImage);
        console.debug("ProductImage created:", response.data);
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
        console.error('Error creating productImage:', error);
        throw error;
    }
};

export const readProduct = async (id) => {
    try {
        const response = await axiosInstance.get(`/productImage/read/${id}`);
        // Debug statement for success
        console.debug('productImage read successfully:', response.data);
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
        console.error('Error reading productImage:', error);
        throw error;
    }
};

export const updateProduct = async (productImage) => {
    try {
        const response = await axiosInstance.post('/productImage/update', productImage);
        // Debug statement for success
        console.debug('Product updated successfully:', response.data);
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
        console.error('Error updating product:', error);
        throw error;
    }
};

export const getAllOrders = async () => {
    try {
        const response = await axiosInstance.get('/productImage/getAll');
        // Debug statement for success
        console.debug('Products fetched successfully:', response.data);
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
        console.error('Error fetching productImages:', error);
        throw error;
    }
};