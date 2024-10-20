// src/components/ShippingDetails.jsx
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import Button
import OrderReview from './OrderReview'; // Import OrderReview component
import PropTypes from 'prop-types';
import { createAddress, getAddressByPhoneNumber } from '../services/AddressService'; // Import address service to save the address

function ShippingDetails() {
  const [shippingDetails, setShippingDetails] = useState({
    title: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    postalCode: '',
    phoneNumber: '' // Add phone number field
  });

  const [isSaved, setIsSaved] = useState(false); // Track if the details are saved
  const [errorMessage, setErrorMessage] = useState('');
  const [addressId, setAddressId] = useState(null); // Store the addressId after saving

  const handleChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      // Save the address and await the response
      console.log("Saving address with details:", shippingDetails); // Log shipping details
      await createAddress(shippingDetails);
      console.log("Address saved successfully!");
  
      // Get the addressId by phone number
      console.log("Fetching address by phone number:", shippingDetails.phoneNumber);
      const response = await getAddressByPhoneNumber(shippingDetails.phoneNumber); // Await the response
      console.log("Response received from getAddressByPhoneNumber:", response); // Log full response
  
      // Check if the response contains data
      if (response && response.data && response.data.length > 0) {
        const addressList = response.data;
        const firstAddress = addressList[0]; // Assuming you want to use the first address from the list
  
        console.log("First address found:", firstAddress); // Log first address details
  
        if (firstAddress && firstAddress.addressId) {
          setAddressId(firstAddress.addressId); // Get the addressId from the first address
          setIsSaved(true); // Set the button to "Saved" state
          console.log("Address ID set:", firstAddress.addressId); // Log addressId
        } else {
          throw new Error("Invalid response structure or addressId not found");
        }
      } else {
        console.warn("No addresses found for this phone number", shippingDetails.phoneNumber); // Log a warning if no address is found
        throw new Error("No addresses found for this phone number");
      }
    } catch (error) {
      console.error("Error saving shipping details:", error);
      setErrorMessage("Error saving details. Please try again."); // Display an error message
    }
  };
  
  

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Shipping Details
      </Typography>
      <TextField
        label="Home/Office"
        name="title"
        fullWidth
        margin="normal"
        value={shippingDetails.title}
        onChange={handleChange}
      />
      <TextField
        label="Address Line 1"
        name="addressLine1"
        fullWidth
        margin="normal"
        value={shippingDetails.addressLine1}
        onChange={handleChange}
      />
      <TextField
        label="Address Line 2"
        name="addressLine2"
        fullWidth
        margin="normal"
        value={shippingDetails.addressLine2}
        onChange={handleChange}
      />
      <TextField
        label="City"
        name="city"
        fullWidth
        margin="normal"
        value={shippingDetails.city}
        onChange={handleChange}
      />
      <TextField
        label="Country"
        name="country"
        fullWidth
        margin="normal"
        value={shippingDetails.country}
        onChange={handleChange}
      />
      <TextField
        label="Postal Code"
        name="postalCode"
        fullWidth
        margin="normal"
        value={shippingDetails.postalCode}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        fullWidth
        margin="normal"
        value={shippingDetails.phoneNumber}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSave}
        disabled={isSaved} // Disable the button if details are saved
      >
        {isSaved ? "Saved" : "Save Shipping Details"} {/* Change text if saved */}
      </Button>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}

      {/* Render OrderReview only after shipping details are saved */}
      {isSaved && <OrderReview addressId={addressId} shippingDetails={shippingDetails} />}
    </Box>
  );
}

ShippingDetails.propTypes = {
  onSave: PropTypes.func, // Optional in this case
};

export default ShippingDetails;
