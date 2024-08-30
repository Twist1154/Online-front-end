// src/inputs/ShippingDetails.jsx

//import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function ShippingDetails() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Shipping Details
      </Typography>
      <TextField
        label="Full Name"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Postal Code"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Country"
        fullWidth
        margin="normal"
      />
    </Box>
  );
}

export default ShippingDetails;
