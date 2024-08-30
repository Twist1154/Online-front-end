// src/inputs/CartSummary.jsx

//import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CartSummary() {
  // Example calculations
  const subtotal = 90; // Example subtotal
  const tax = 8;       // Example tax
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
