// OrderItemsService.jsx
import axiosInstance from '../axiosConfig';

// Create a new order item
export const createOrderItem = async (orderItem) => {
    try {
        const response = await axiosInstance.post('/order-item/create', orderItem);
        // Debug statement for success
        console.debug('Order item created successfully:', response.data);
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
        console.error('Error creating order item:', error);
        throw error;
    }
};

// Get an order item by its ID
export const readOrderItem = async (id) => {
    try {
        const response = await axiosInstance.get(`/order-item/read/${id}`);
        // Debug statement for success
        console.debug('Order item read successfully:', response.data);
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
        console.error('Error reading order item:', error);
        throw error;
    }
};

// Update an existing order item
export const updateOrderItem = async (orderItem) => {
    try {
        const response = await axiosInstance.post('/order-item/update', orderItem);
        // Debug statement for success
        console.debug('Order item updated successfully:', response.data);
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
        console.error('Error updating order item:', error);
        throw error;
    }
};

// Get all order items
export const getAllOrderItems = async () => {
    try {
        const response = await axiosInstance.get('/order-item/all');
        // Debug statement for success
        console.debug('Order items fetched successfully:', response.data);
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
        console.error('Error fetching order items:', error);
        throw error;
    }
};

// Find order items by order ID
export const findOrderItemsByOrderID = async (orderID) => {
    try {
        const response = await axiosInstance.get(`/order-item/order/${orderID}`);
        // Debug statement for success
        console.debug('Order items by order ID fetched successfully:', response.data);
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
        console.error('Error fetching order items by order ID:', error);
        throw error;
    }
};

// Find order items by product ID
export const findOrderItemsByProductID = async (productID) => {
    try {
        const response = await axiosInstance.get(`/order-item/product/${productID}`);
        // Debug statement for success
        console.debug('Order items by product ID fetched successfully:', response.data);
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
        console.error('Error fetching order items by product ID:', error);
        throw error;
    }
};

// Delete an order item by ID
export const deleteOrderItemByID = async (orderItemID) => {
    try {
        await axiosInstance.delete(`/order-item/delete/${orderItemID}`);
        // Debug statement for success
        console.debug('Order item deleted successfully');
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
        console.error('Error deleting order item:', error);
        throw error;
    }
};

// Delete order items by order ID
export const deleteOrderItemsByOrderID = async (orderID) => {
    try {
        await axiosInstance.delete(`/order-item/order/${orderID}`);
        // Debug statement for success
        console.debug('Order items by order ID deleted successfully');
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
        console.error('Error deleting order items by order ID:', error);
        throw error;
    }
};
