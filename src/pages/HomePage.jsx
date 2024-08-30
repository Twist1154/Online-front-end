import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Capstone Clothing Store
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Discover the latest trends in fashion and get inspired by our new styles.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Shop Now
        </Button>
      </Box>


    </Container>
  );
}

export default HomePage;