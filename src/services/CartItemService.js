import axios from '../axiosConfig';

// 1. Create a CartItem
export const createCartItem = async (cartItem) => {
  try {
    const response = await axios.post(`/cartItems/create`, cartItem);
    return response.data;
  } catch (error) {
    console.error('Error creating CartItem:', error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

// 2. Read a CartItem by ID
export const getCartItem = async (id) => {
  try {
    const response = await axios.get(`/cartItems/read/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching CartItem by ID:', error);
    throw error;
  }
};

// 3. Update a CartItem
export const updateCartItem = async (cartItem) => {
  try {
    const response = await axios.post(`/cartItems/update`, cartItem);
    return response.data;
  } catch (error) {
    console.error('Error updating CartItem:', error);
    throw error;
  }
};

// 4. Get all CartItems
export const getAllCartItems = async () => {
  try {
    const response = await axios.get(`/cartItems/getAll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all CartItems:', error);
    throw error;
  }
};

// Fetch cart item by cart ID
export const getCartItemsByCartID = async (cartId) => {
  try {
    const response = await axios.get(`/cartItems/cart/${cartId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items by cartId:', error);
    throw error;
  }
};