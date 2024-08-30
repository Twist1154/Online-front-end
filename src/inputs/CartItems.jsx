import { useContext } from 'react'; // Import React and useContext
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CartContext from '../context/CartContext'; // Ensure the path is correct

function CartItems() {
  const { cartItems } = useContext(CartContext);

  console.log('Cart items:', cartItems); // Check if items are present

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Items in Your Cart
      </Typography>
      <List>
        {cartItems.length === 0 ? (
          <Typography>No items in your cart.</Typography>
        ) : (
          cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`Price: $${item.price * item.quantity}`}
              />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
}


export default CartItems;
