import * as React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { findOrderItemsByOrderID } from '../services/OrderItemService';

export default function OrderItems() {
  const { orderID } = useParams(); // Get orderID from URL
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const items = await findOrderItemsByOrderID(orderID);
        setOrderItems(items);
      } catch (error) {
        console.error('Error fetching order items: ', error);
      }
    };

    if (orderID) {
      fetchOrderItems();
    }
  }, [orderID]);

  return (
    <Box sx={{ width: '100%' }}>
      {orderItems.length > 0 ? (
        <>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Order Items for Order ID: {orderID}
          </Typography>
          <List dense>
            {orderItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Item ID: ${item.id}, Name: ${item.productName}, Quantity: ${item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography>No items found for this order.</Typography>
      )}
    </Box>
  );
}
