// src/inputs/OrderReview.jsx

//import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function OrderReview() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Review Your Order
      </Typography>
      <Typography variant="body1" paragraph>
        Please review all items, shipping, and payment details before confirming your order.
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {/* Additional details would go here */}
      <Button variant="contained" color="primary">
        Place Order
      </Button>
    </Box>
  );
}

export default OrderReview;
