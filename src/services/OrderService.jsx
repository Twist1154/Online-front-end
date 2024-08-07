// OrderService.jsx
import axiosInstance from '../axiosConfig';

// Create a new order
export const createOrder = async (order) => {
    try {
        const response = await axiosInstance.post('/order/create', order);
        // Debug statement for success
        console.debug('Order created successfully:', response.data);
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
        console.error('Error creating order:', error);
        throw error;
    }
};

// Read an order by ID
export const readOrder = async (id) => {
    try {
        const response = await axiosInstance.get(`/order/read/${id}`);
        // Debug statement for success
        console.debug('Order read successfully:', response.data);
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
        console.error('Error reading order:', error);
        throw error;
    }
};

// Update an existing order
export const updateOrder = async (order) => {
    try {
        const response = await axiosInstance.post('/order/update', order);
        // Debug statement for success
        console.debug('Order updated successfully:', response.data);
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
        console.error('Error updating order:', error);
        throw error;
    }
};

// Get all orders
export const getAllOrders = async () => {
    try {
        const response = await axiosInstance.get('/order/getAll');
        // Debug statement for success
        console.debug('Orders fetched successfully:', response.data);
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
        console.error('Error fetching orders:', error);
        throw error;
    }
};
