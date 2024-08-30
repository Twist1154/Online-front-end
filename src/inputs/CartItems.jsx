import { useContext } from 'react';
import PropTypes from 'prop-types'; 
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CartContext from '../context/CartContext'; 

function CartItems() {
  const { cartItems } = useContext(CartContext); 
  console.log('Cart items:', cartItems);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Items in Your Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.name} (x${item.quantity})`}
              secondary={`Price: R${item.price * item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

// Add PropTypes for cartItems to ensure the correct data structure
CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default CartItems;
