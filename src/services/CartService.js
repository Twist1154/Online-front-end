import axios from '../axiosConfig';

// 1. Create a new cart
export const createCart = async (cart) => {
  try {
    const response = await axios.post('/cart/create', cart);
    return response.data;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

// 2. Read a cart by ID
export const getCartById = async (id) => {
  try {
    const response = await axios.get(`/cart/read/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart by ID:', error);
    throw error;
  }
};

// 3. Update a cart by ID
export const updateCart = async (id, cart) => {
  try {
    const response = await axios.put(`/cart/update/${id}`, cart);
    return response.data;
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
};

// 4. Delete a cart by ID
export const deleteCart = async (id) => {
  try {
    await axios.delete(`/cart/delete/${id}`);
  } catch (error) {
    console.error('Error deleting cart:', error);
    throw error;
  }
};

// 5. Get all carts
export const getAllCarts = async () => {
  try {
    const response = await axios.get('/cart/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching all carts:', error);
    throw error;
  }
};

// 6. Get carts by userID
export const getCartsByUserID = async (userID) => {
  try {
    const response = await axios.get(`/cart/user/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching carts by userID:', error);
    throw error;
  }
};

// 7. Get carts by status
export const getCartsByStatus = async (status) => {
  try {
    const response = await axios.get(`/cart/status/${status}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching carts by status:', error);
    throw error;
  }
};

// 8. Get carts by date range
export const getCartsByDateRange = async (startDate, endDate) => {
  try {
    const response = await axios.get('/cart/date-range', {
      params: { startDate, endDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching carts by date range:', error);
    throw error;
  }
};

// 9. Get carts by addressID
export const getCartsByAddressID = async (addressID) => {
  try {
    const response = await axios.get(`/cart/address/${addressID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching carts by addressID:', error);
    throw error;
  }
};

// 10. Get carts with total price greater than a specified value
export const getCartsByTotalPrice = async (totalPrice) => {
  try {
    const response = await axios.get(`/cart/total-price/${totalPrice}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching carts by total price:', error);
    throw error;
  }
};

// 11. Add an item to the cart
export const addCartItem = async (cartId, cartItem) => {
  try {
    const response = await axios.post(`/cart/${cartId}/add-item`, cartItem);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

// 12. Remove an item from the cart
export const removeCartItem = async (cartId, cartItem) => {
  try {
    const response = await axios.post(`/cart/${cartId}/remove-item`, cartItem);
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};
