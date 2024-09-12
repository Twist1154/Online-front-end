import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import OrderDialogs from '../inputs/OrderDialogs';
import { readAddress } from '../services/AddressService'; // Importing the addressService
import { findOrderItemsByOrderID } from '../services/OrderItemService'; // Import the order item service
import dayjs from 'dayjs'; // Import Day.js

// Function to parse the LocalDateTime string into a Day.js object
const parseLocalDateTime = (dateTimeStr) => {
  if (!dateTimeStr) return null; // Handle null or empty case
  return dayjs(dateTimeStr); // Return Day.js object
};

// Define the columns for the data grid
const columns = [
  { field: 'id', headerName: 'Order ID', width: 100 },
  { field: 'userID', headerName: 'User ID', width: 100 },
  { field: 'addressID', headerName: 'Address ID', width: 100 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'totalPrice', headerName: 'Total Price', width: 100, type: 'number' },
  { field: 'orderDate', headerName: 'Order Date', width: 100, type: 'Date' },

  // Display the number of items in the orderItems array
  {
    field: 'totalItems',
    headerName: 'Total Items',
    width: 120,
    valueGetter: async (params) => {
      try {
        const data = await findOrderItemsByOrderID(params.row.id); // Fetch order items by order ID
        return data.length; // Return the count of order items
      } catch (error) {
        console.error('Error fetching order items:', error);
        return 0; // Return 0 in case of an error
      }
    },
  },
];

export default function DataTable({ rows }) {
  const [open, setOpen] = React.useState(false); // State to manage the dialog open/close
  const [address, setAddress] = React.useState(null); // State to store the address details

  // Handle cell click event
  const handleCellClick = async (params) => {
    if (params.field === 'addressID') {
      try {
        const response = await readAddress.read(params.value); // Fetch address details
        setAddress(response.data); // Set address details
        setOpen(true); // Open dialog
      } catch (error) {
        console.error('Error fetching address:', error); // Log error
      }
    }
  };

  // Handle dialog close event
  const handleClose = () => {
    setOpen(false); // Close dialog
    setAddress(null); // Reset address details
  };

  return (
    <div style={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={rows} // Data rows
        columns={columns} // Columns configuration
        getRowId={(row) => row.id} // Use `id` as the row ID
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }, // Initial pagination settings
          },
        }}
        pageSizeOptions={[5, 10]} // Page size options
        checkboxSelection // Enable checkbox selection
        onCellClick={handleCellClick} // Add click listener for cells
      />
      <OrderDialogs open={open} address={address} handleClose={handleClose} /> {/* Pass the dialog props */}
    </div>
  );
}

// Prop types validation
DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userID: PropTypes.number.isRequired,
      addressID: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      orderDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};
