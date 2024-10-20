import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createCart, getCartsByUserID } from '../services/CartService'; // Import the createCart and getCartsByUserID services
import { useAuth } from '../context/AuthContext'; // Import AuthContext to get the current user
import { useEffect } from 'react';

// Example input components for CartPage
import CartItems from '../inputs/CartItems';
import CartSummary from '../inputs/CartSummary';
import PaymentOptions from '../inputs/PaymentOptions';
import ShippingDetails from '../inputs/ShippingDetails';
import OrderReview from '../inputs/OrderReview';

function CartPage() {
  const [value, setValue] = React.useState(0);
  const { currentUser } = useAuth(); // Get the current user from AuthContext

  useEffect(() => {
    // Function to create a cart if none exists
    const createCartForUser = async () => {
      if (currentUser && currentUser.userID) {
        try {
          // Check if there are existing carts for the user
          const existingCarts = await getCartsByUserID(currentUser.userID);
          
          // If no existing carts, create a new one
          if (existingCarts.length === 0) {
            const cartData = {
              userID: currentUser.userID, // Get the user ID from the current user
              totalPrice: 0.00, // Set initial total price
              cartItems: [], // Empty cart items
              cartDate: new Date().toISOString() // Set current date
            };

            console.log('Creating cart with data:', cartData); // Log cart data

            const createdCart = await createCart(cartData);
            console.log('Cart created successfully:', createdCart);
          } else {
            console.log('Cart already exists for user ID:', currentUser.userID);
          }
        } catch (error) {
          console.error('Error processing cart for user:', error);
        }
      } else {
        console.warn('Current user not found or user ID is missing'); // Log warning if currentUser is not valid
      }
    };

    if (currentUser) {
      createCartForUser();
    }
  }, [currentUser]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="70vw">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', pt: 4 }}>
          <Typography variant="h1" noGutters>
            Your Cart
          </Typography>
          <Card>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Tab label="Items" />
              <Tab label="Summary" />
              <Tab label="Payment" />
              <Tab label="Shipping" />
              <Tab label="Review Order" />
            </Tabs>
            <CardContent>
              {value === 0 && <CartItems />}
              {value === 1 && <CartSummary />}
              {value === 2 && <PaymentOptions />}
              {value === 3 && <ShippingDetails />}
              {value === 4 && <OrderReview />}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default CartPage;
