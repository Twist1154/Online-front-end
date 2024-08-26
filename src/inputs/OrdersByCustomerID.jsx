// OrdersByCustomerID.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { findOrdersByCustomerID } from '../services/OrderService';// Correct import
import OrdersDisplayTable from '../components/OrdersDisplayTable'; // Importing the PriceRangeTable component


  export default function OrdersByCustomerID() {
    const [customerID, setCustomerID] = React.useState('');
    const [rows, setRows] = React.useState([]);
    const [error, setError] = React.useState(null);


  // Function to call the Axios method
const handleFetchOrders = async () => {
  try {
    const response = await findOrdersByCustomerID(customerID);
    console.log('Fetched orders:', response.data);
    if (Array.isArray(response.data) && response.data.length > 0) {
      setRows(response.data); // Set the retrieved data to the rows state
    } else {
      setError('No orders found for this customer ID');
      setRows([]); // Clear the table if no valid data is returned
    }
  } catch (error) {
    setError('Error fetching orders: ' + error.message);
    setRows([]); // Clear the table if there's an error
  }
};

const handleCustomerIDChange = (event) => {
  setCustomerID(event.target.value);
};

return (
  <Box  sx={{ width: '100vh' }}>
    <TextField
      label="Customer ID"
      value={customerID}
      onChange={handleCustomerIDChange}
      margin="normal"
    />
    <Button 
    variant="contained"
    sx={{ width: 250, height: 56, margin: 2}} 
    onClick={handleFetchOrders}
    >
      Fetch Orders
    </Button>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <OrdersDisplayTable rows={rows} />
  </Box>
);
}
