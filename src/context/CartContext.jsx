import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Validate the product details before adding to the cart
    if (!product || !product.id || !product.name || !product.price || !product.image) {
      console.error('Invalid product details:', product);
      return;
    }

    console.log('Adding to cart:', product); // Ensure all necessary product details are logged
    const existingItem = cartItems.find((item) => item.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    console.log('Removing item with id:', id); // Log the removal action
    setCartItems(cartItems.filter(item => item.id !== id)); // Filter out the item
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
