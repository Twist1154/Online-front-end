import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import CartContext from '../context/CartContext';
import ProductGetAll from "../inputs/ProductGetAll.jsx";
import ProductRead from "../inputs/ProductRead.jsx";
import ProductCreate from "../inputs/ProductCreate.jsx";
import ProductUpdate from "../inputs/ProductUpdate.jsx";
import ProductDelete from "../inputs/ProductDelete.jsx";
import ProductName from "../inputs/ProductName.jsx";
import ProductDescription from "../inputs/ProductDescription.jsx";
import ProductCategory from "../inputs/ProductCategory.jsx";
import ProductPriceRange from "../inputs/ProductPriceRange.jsx";
import ProductCreated from "../inputs/ProductCreated.jsx";
import ProductUpdated from "../inputs/ProductUpdated.jsx";

function ProductsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="70vw">
        <Box sx={{ bgcolor: '#cfe8fc', minHeight: '100vh', pt: 4, textAlign: 'center' }}>
          <Typography variant="h1" gutterBottom>
            Products
          </Typography>
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
              <Tab label="Create" />
              <Tab label="Read" />
              <Tab label="Update" />
              <Tab label="Delete" />
              <Tab label="Get All" />
              <Tab label="Get by name" />
              <Tab label="Get by description" />
              <Tab label="Get by category" />
              <Tab label="Price between" />
              <Tab label="Created after" />
              <Tab label="Updated after" />
            </Tabs>
            <CardContent>
              {value === 0 && <ProductCreate />}
              {value === 1 && <ProductRead />}
              {value === 2 && <ProductUpdate />}
              {value === 3 && <ProductDelete />}
              {value === 4 && <ProductGetAll />}
              {value === 5 && <ProductName />}
              {value === 6 && <ProductDescription />}
              {value === 7 && <ProductCategory />}
              {value === 8 && <ProductPriceRange />}
              {value === 9 && <ProductCreated />}
              {value === 10 && <ProductUpdated />}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ProductsPage;
