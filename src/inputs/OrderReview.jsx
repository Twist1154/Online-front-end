import { useState } from 'react'; // Import React and useState
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { createOrder } from '../services/OrderService'; // Adjust the import path if needed

function OrderReview() {
  // State for handling submission status
  const [status, setStatus] = useState('');

  // Dummy data for demonstration purposes
  const orderData = {
    items: [
      { id: 1, name: 'Jean', quantity: 2, price: 599.99 },
      { id: 2, name: 'T-Shirt', quantity: 1, price: 199.99 }
    ],
    shipping: {
      fullName: 'John Doe',
      address: '123 Main St',
      city: 'Cityville',
      postalCode: '12345',
      country: 'Countryland'
    },
    total: 1399.97 // Example total
  };

  // Handle order placement
  const handlePlaceOrder = async () => {
    try {
      await createOrder(orderData);
      setStatus('Order placed successfully!');
    } catch (error) {
      setStatus('Error placing order. Please try again.');
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Review Your Order
      </Typography>
      <Typography variant="body1" paragraph>
        Please review all items, shipping, and payment details before confirming your order.
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {/* Display order details (items, shipping, and total) */}
      <Typography variant="h6">Order Details</Typography>
      {orderData.items.map((item) => (
        <Typography key={item.id} variant="body1">
          {item.name} (x{item.quantity}) - R{(item.price * item.quantity).toFixed(2)}
        </Typography>
      ))}
      <Typography variant="body1" sx={{ mt: 2 }}>
        Shipping Address: {orderData.shipping.fullName}, {orderData.shipping.address}, {orderData.shipping.city}, {orderData.shipping.postalCode}, {orderData.shipping.country}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: R{orderData.total.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
      {status && <Typography variant="body1" sx={{ mt: 2 }}>{status}</Typography>}
    </Box>
  );
}

export default OrderReview;
