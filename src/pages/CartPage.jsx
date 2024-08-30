import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; // Styling for all texts
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Example input components for CartPage
import CartItems from '../inputs/CartItems';
import CartSummary from '../inputs/CartSummary';
import PaymentOptions from '../inputs/PaymentOptions';
import ShippingDetails from '../inputs/ShippingDetails';
import OrderReview from '../inputs/OrderReview';

function CartPage() {
  const [value, setValue] = React.useState(0);

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
