import { useContext } from 'react'; // Import useContext
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CartContext from '../context/CartContext'; // Ensure the path is correct

function CartSummary() {
  // Access cart items from CartContext
  const { cartItems } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Example tax rate (e.g., 8%)
  const taxRate = 0.08;
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + tax;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Cart Summary
      </Typography>
      <Typography variant="body1">Subtotal: R{subtotal.toFixed(2)}</Typography>
      <Typography variant="body1">Tax: R{tax.toFixed(2)}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Total: R{total.toFixed(2)}</Typography>
    </Box>
  );
}

export default CartSummary;
