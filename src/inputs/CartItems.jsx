import { useContext, useEffect, useState } from 'react'; 
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'; 
import CartContext from '../context/CartContext'; 
import { createCartItem, getCartItemsByCartID } from '../services/CartItemService'; 
import { getCartsByUserID } from '../services/CartService'; 
import { useAuth } from '../context/AuthContext'; 

function CartItems() {
  const { cartItems, removeItem } = useContext(CartContext);
  const { currentUser } = useAuth(); 
  const [userCartItems, setUserCartItems] = useState([]); // State for user's cart items
  const [cartID, setCartID] = useState(null); // State for the cart ID

  // Step 1: Fetch the cart for the user and set the cart ID (Executed on user login)
  useEffect(() => {
    const fetchCart = async () => {
      if (currentUser && currentUser.id) {
        try {
          const carts = await getCartsByUserID(currentUser.id); 
          if (carts && carts.length > 0) {
            const cart = carts[0]; // Assume only one cart per user
            setCartID(cart.id);
            console.log("cartID set!"); 
          } else {
            console.warn('No carts found for this user.');
          }
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      }
    };

    fetchCart(); // Fetch cart when the user logs in
  }, [currentUser]);

  // Step 2: Fetch cart items by cart ID (Executed when cartID is available)
  useEffect(() => {
    const fetchCartItems = async () => {
      if (cartID) {
        try {
          const cartItemsFromDB = await getCartItemsByCartID(cartID); 
          setUserCartItems(cartItemsFromDB); // Set fetched cart items
          console.log("cartItems set!");
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      }
    };

    fetchCartItems(); // Fetch items when cartID is set
  }, [cartID]);

  // Step 3: Store new cart items in the CartItem table (Executed only when new items are added)
  useEffect(() => {
    const addItemsToDB = async () => {
      if (!cartID || cartItems.length === 0) return; // If no cartID or cartItems, return early

      try {
        for (const item of cartItems) {
          const cartItem = {
            productId: item.productId,
            price: item.price,
            cartId: cartID, 
          };

          await createCartItem(cartItem); // Add item to DB
          console.log("cartitem stored successfully");
        }
      } catch (error) {
        console.error("Error adding items to the database:", error);
      }
    };

    addItemsToDB(); // Add new cart items when they are added to the cart
  }, [cartItems, cartID]); // Depend on cartItems and cartID to run only when they change

  // Combine userCartItems and cartItems for display
  const combinedCartItems = [...userCartItems, ...cartItems];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Items in Your Cart
      </Typography>
      <List>
        {combinedCartItems.length === 0 ? (  // Check if there are any items
          <Typography>No items in your cart.</Typography>
        ) : (
          combinedCartItems.map((item) => (  // Map through combined items
            <ListItem key={item.productId}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '50px', height: '50px', marginRight: '15px' }}
              />
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`Price: R${item.price * item.quantity}`} 
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const confirmDelete = window.confirm("Are you sure you want to remove this item?");
                  if (confirmDelete) {
                    removeItem(item.productId); // Call removeItem with the correct productId
                  }
                }}
              >
                Remove
              </Button>
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
}  

export default CartItems;
