import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PriceRange from '../inputs/PriceRange';

function OrdersPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="70vw">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', pt: 4 }}>
          <Card>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Tab label="Price" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
            <CardContent>
              {value === 0 && <PriceRange />}
              {value === 1 && <div>Content for Item Two</div>}
              {value === 2 && <div>Content for Item Three</div>}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default OrdersPage;
