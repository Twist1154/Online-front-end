// src/inputs/PaymentOptions.jsx

//import React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function PaymentOptions() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Payment Options
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="payment" name="payment">
          <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
          <FormControlLabel value="bank-transfer" control={<Radio />} label="Bank Transfer" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default PaymentOptions;
