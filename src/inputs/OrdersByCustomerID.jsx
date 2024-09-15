import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { findOrdersByCustomerID } from '../services/OrderService';
import OrdersDisplayTable from '../components/OrdersDisplayTable';

export default function OrdersByCustomerID() {
  const [userID, setUserID] = React.useState('');
  const [rows, setRows] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleFetchOrders = async () => {
    try {
      const data = await findOrdersByCustomerID(userID); // Update here
      console.log('Fetched orders:', data);
      if (Array.isArray(data) && data.length > 0) {
        setRows(data);
        setError(null);
      } else {
        setError('No orders found for this customer ID');
        setRows([]);
      }
    } catch (error) {
      setError('Error fetching orders: ' + error.message);
      setRows([]);
    }
  };

  const handleUserIDChange = (event) => {
    setUserID(event.target.value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <h2>Orders by User ID</h2>
      <TextField
        label="User ID"
        value={userID}
        onChange={handleUserIDChange}
        margin="normal"
      />
      <Button
        variant="contained"
        sx={{ width: 250, height: 56, margin: 2 }}
        onClick={handleFetchOrders}
        disabled={!userID} // Disable button if userID is empty
      >
        Fetch Orders
      </Button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <OrdersDisplayTable rows={rows} />
    </Box>
  );
}
