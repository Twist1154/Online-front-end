import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import OrderDialogs from '../inputs/OrderDialogs';
import {readAddress} from '../services/AddressService'; // Importing the addressService

// Define the columns for the data grid
const columns = [
  { field: 'orderID', headerName: 'Order ID', width: 100 },
  { field: 'customerID', headerName: 'Customer ID', width: 100 },
  { field: 'addressID', headerName: 'Address ID', width: 100 },
  { field: 'orderDate', headerName: 'Order Date', width: 120, type: 'Date' },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'totalPrice', headerName: 'Total Price', width: 100, type: 'number' },
  { field: 'orderItemsID', headerName: 'Order Items ID', width: 150 },
];

export default function DataTable({ rows }) {
  const [open, setOpen] = React.useState(false); // State to manage the dialog open/close
  const [address, setAddress] = React.useState(null); // State to store the address details

  // Handle cell click event
  const handleCellClick = async (params) => {
    if (params.field === 'addressID') {
       try {
         const response = await readAddress.read(params.id); // Fetch address details
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
    <div style={{ height: 400, width: 'auto' }}>
      <DataGrid
        rows={rows} // Data rows
        columns={columns} // Columns configuration
        getRowId={(row) => row.orderID} // Use orderid as the row ID
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
      orderID: PropTypes.string,
      addressID: PropTypes.string,
      customerID: PropTypes.string,
      orderDate: PropTypes.string,
      orderItemsID: PropTypes.string,
      status: PropTypes.string,
      total_price: PropTypes.number,
    })
  )};
