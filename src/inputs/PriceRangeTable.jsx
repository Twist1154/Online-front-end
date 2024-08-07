import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import CustomizedDialogs from './CustomizedDialogs';
import addressService from '../services/addressService'; // Importing the addressService

// Define the columns for the data grid
const columns = [
  { field: 'orderid', headerName: 'Order ID', width: 150 },
  { field: 'addressid', headerName: 'Address ID', width: 150 },
  { field: 'customerid', headerName: 'Customer ID', width: 150 },
  { field: 'order_date', headerName: 'Order Date', width: 150, type: 'date' },
  { field: 'order_itemsid', headerName: 'Order Items ID', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'total_price', headerName: 'Total Price', width: 150, type: 'number' },
];

export default function DataTable({ rows }) {
  const [open, setOpen] = React.useState(false); // State to manage the dialog open/close
  const [address, setAddress] = React.useState(null); // State to store the address details

  // Handle cell click event
  const handleCellClick = async (params) => {
    if (params.field === 'addressid') {
      try {
        const response = await addressService.getAddressById(params.value); // Fetch address details
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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows} // Data rows
        columns={columns} // Columns configuration
        getRowId={(row) => row.orderid} // Use orderid as the row ID
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }, // Initial pagination settings
          },
        }}
        pageSizeOptions={[5, 10]} // Page size options
        checkboxSelection // Enable checkbox selection
        onCellClick={handleCellClick} // Add click listener for cells
      />
      <CustomizedDialogs open={open} address={address} handleClose={handleClose} /> {/* Pass the dialog props */}
    </div>
  );
}

// Prop types validation
DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      orderid: PropTypes.string.isRequired,
      addressid: PropTypes.string.isRequired,
      customerid: PropTypes.string.isRequired,
      order_date: PropTypes.string.isRequired,
      order_itemsid: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      total_price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
