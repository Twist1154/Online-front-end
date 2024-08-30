import axiosInstance from '../axiosConfig';

export const createProduct = async (product) => {
    try{
        const response = await axiosInstance.post('/product/create', product);
        console.debug("Product created:", response.data);
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
        console.error('Error creating product:', error);
        throw error;
    }
};

export const readProduct = async (id) => {
    try {
        const response = await axiosInstance.get(`/product/read/${id}`);
        // Debug statement for success
        console.debug('Product read successfully:', response.data);
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
        console.error('Error reading Product:', error);
        throw error;
    }
};

export const updateProduct = async (product) => {
    try {
        const response = await axiosInstance.post('/product/update', product);
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

export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get('/product/getAll');
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
        console.error('Error fetching products:', error);
        throw error;
    }
};