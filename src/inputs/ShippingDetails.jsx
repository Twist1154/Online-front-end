import { useState } from 'react'; // Import React and useState
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createAddress } from '../services/AddressService'; // Adjust the import path if needed

function ShippingDetails() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  // State for handling submission status
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAddress(formData);
      setStatus('Address saved successfully!');
    } catch (error) {
      setStatus('Error saving address. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h5" gutterBottom>
        Shipping Details
      </Typography>
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Postal Code"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Save Address
      </Button>
      {status && <Typography variant="body1" sx={{ mt: 2 }}>{status}</Typography>}
    </Box>
  );
}

export default ShippingDetails;
