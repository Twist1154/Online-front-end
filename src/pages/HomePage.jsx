import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/ProductService'; // Import the getAllProducts service

function HomePage({ currentUser }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openWelcomeDialog, setOpenWelcomeDialog] = useState(false); // Default to false

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();

        // Show the welcome dialog only if the user is logged in
        if (currentUser) {
            setOpenWelcomeDialog(true);
        }
    }, [currentUser]); // Run this effect when currentUser changes

    const handleDialogClose = () => {
        setOpenWelcomeDialog(false);
    };

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

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            {/* Welcome Dialog */}
            <Dialog
                open={openWelcomeDialog}
                onClose={handleDialogClose}
                aria-labelledby="welcome-dialog-title"
                aria-describedby="welcome-dialog-description"
            >
                <DialogTitle id="welcome-dialog-title">
                    Welcome!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="welcome-dialog-description">
                        {`Hello ${currentUser ? currentUser.firstName : 'User'}, welcome to the Capstone Store!`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

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
                    {products.slice(0, 6).map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h6">
                                        Price: R{product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} to={`/product-detail/${product.id}`} variant="contained" color="primary">
                                        View Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

// Define PropTypes for the component
HomePage.propTypes = {
    currentUser: PropTypes.shape({
        firstName: PropTypes.string.isRequired, // Ensure firstName is a required string
    })
};

export default HomePage;
