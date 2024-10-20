import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import * as React from "react";
import { getProductsByCategoryId } from "../services/ProductService.js";

export default function ProductCategory() {
    const [productCategory, setProductCategory] = React.useState('');
    const [products, setProducts] = React.useState([]); // Stores fetched products as an array
    const [error, setError] = React.useState(null);

    const handleFetchProduct = async () => {
        try {
            const response = await getProductsByCategoryId(productCategory);
            setProducts(response); // Assuming the response is a list of products
            console.log('Fetched products: ', response);
        } catch (error) {
            setError('Error fetching products: ' + error.message);
            setProducts([]); // Clears products if error occurs
        }
    };

    const handleProductCategoryChange = (event) => {
        setProductCategory(event.target.value);
    };

    return (
        <div>
            <Box>
                <TextField
                    label="Product category ID"
                    value={productCategory}
                    onChange={handleProductCategoryChange}
                    margin="normal"
                />
                <Button
                    variant="contained"
                    sx={{ width: 250, height: 56, margin: 2 }}
                    onClick={handleFetchProduct}
                >
                    Get by category
                </Button>

                {/* Render products if available */}
                {products.length > 0 ? (
                    <Grid container spacing={2}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={product.name}
                                        height="500"
                                        image={product.images?.imageUrl1 || '/placeholder.png'}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Product ID: {product.id}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Name: {product.name}
                                        </Typography>
                                        <Typography variant="body2" component="div">
                                            Description: {product.description}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Price: R{product.price}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Stock: {product.stock}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Category ID: {product.categoryId}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Created date: {product.createdAt}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            Updated date: {product.updatedAt}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    error && <Typography color="error">{error}</Typography>
                )}
            </Box>
        </div>
    );
}
