import { useContext, useEffect } from 'react'; 
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'; 
import CartContext from '../context/CartContext'; 
import { createCartItem } from '../services/CartItemService'; 

function CartItems() {
  const { cartItems, removeItem } = useContext(CartContext);

  useEffect(() => {
    // Loop through cartItems and call the cartItemService create method for each
    const addItemsToDB = async () => {
      try {
        for (const item of cartItems) {
          await createCartItem(item); // Automatically adds cart items to the database
        }
      } catch (error) {
        console.error("Error adding items to the database:", error);
      }
    };

    if (cartItems.length > 0) {
      addItemsToDB(); // Call the function to add items to the database
    }
  }, [cartItems]); // Runs whenever cartItems is updated

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Items in Your Cart
      </Typography>
      <List>
        {cartItems?.length === 0 ? (
          <Typography>No items in your cart.</Typography>
        ) : (
          cartItems.map((item) => (
            <ListItem key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '50px', height: '50px', marginRight: '15px' }}
              />
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`Price: R${item.price * item.quantity}`} //
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const confirmDelete = window.confirm("Are you sure you want to remove this item?");
                  if (confirmDelete) {
                    removeItem(item.id); // Only call removeItem if the user confirms
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
