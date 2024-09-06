import { useContext } from 'react'; // Import React and useContext
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CartContext from '../context/CartContext'; // Ensure the path is correct

function CartItems() {
  const { cartItems } = useContext(CartContext);

  // Check if cartItems is defined to prevent possible errors
  console.log('Cart items:', cartItems || []); // Always safe access to cartItems

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Items in Your Cart
      </Typography>
      <List>
        {/* Add a null check for cartItems to avoid undefined errors */}
        {cartItems?.length === 0 ? (
          <Typography>No items in your cart.</Typography>
        ) : (
          cartItems.map((item) => (
            <ListItem key={item.id}>
              {/* Display the item image */}
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '50px', height: '50px', marginRight: '15px' }} // Adjust as needed
              />
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`Price: R${item.price * item.quantity}`}
              />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
}

export default CartItems;
