import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, CircularProgress, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/ProductService'; // Import the getAllProducts service

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1); // State for current page
    const [itemsPerPage] = useState(6); // Number of products per page

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data); // Set fetched products
                setLoading(false); // Set loading to false after fetching
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false); // Stop loading in case of an error
            }
        };

        fetchProducts();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Calculate the number of pages
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Get the products for the current page
    const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
                <CircularProgress />
                <Typography variant="h6" component="p" sx={{ mt: 2 }}>
                    Loading products...
                </Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h6" component="p" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    const handlePageChange = (event, value) => {
        setPage(value); // Set current page when pagination is changed
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Capstone Store
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Discover the latest trends in fashion and get inspired by our new styles.
                </Typography>
                <Button component={Link} to="/product-listing" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                    Shop Now
                </Button>
            </Box>

            {/* Featured Products Section */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Featured Products
                </Typography>
                <Grid container spacing={4}>
                    {paginatedProducts.map(product => ( // Use paginated products
                        <Grid item xs={12} sm={6} md={4} key={product.productId}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={product.images?.imageUrl1} // Safely access imageUrl1
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6">
                                        Price: R{product.price}
                                    </Typography>
                                    <Typography variant="body2">
                                        Stock: {product.stock}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Link to product details page with product ID */}
                                    <Button component={Link} to={`/product-detail/${product.productId}`} variant="contained" color="primary">
                                        View Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Pagination */}
            <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                    count={pageCount} // Total pages
                    page={page} // Current page
                    onChange={handlePageChange} // Change page on click
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                />
            </Box>
        </Container>
    );
}

export default HomePage;
