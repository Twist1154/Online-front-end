import React, { Component } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'; // Import Icon for upload button
import { uploadFileToS3 } from "../services/S3Service.js";

class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            stock: '',
            categoryId: '',
            imageFiles: [], // Holds the files to upload
            imagePreviewUrls: [], // URLs to preview the images before uploading
            successMessage: '',
            errorMessage: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, description, price, stock, categoryId, imageFiles } = this.state;

        try {
            let imagePaths = {};

            // Ensure images are selected before proceeding
            if (imageFiles.length > 0) {
                // Upload each file to S3 and get their URLs
                for (let i = 0; i < imageFiles.length; i++) {
                    const uploadedImageUrl = await uploadFileToS3(imageFiles[i]);
                    imagePaths[`imageUrl${i + 1}`] = uploadedImageUrl; // Assign each URL to imagePaths object with keys
                }
            } else {
                throw new Error('Please select up to 4 images to upload.');
            }

            // Get current date and time in ISO format
            const currentDateTime = new Date().toISOString();

            // Construct the product data to match the server's expected format
            const productData = {
                productId: null, // Set to null or omit if the server generates this
                name,
                description,
                price: parseFloat(price), // Ensure price is a number
                stock: parseInt(stock, 10), // Ensure stock is an integer
                categoryId,
                createdAt: currentDateTime,
                updatedAt: currentDateTime,
                images: imagePaths // Use the image paths object
            };

            // Print product data to console
            console.log('Sending to backend:', productData);

            const response = await fetch('http://localhost:8080/shopping_store/product/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                this.setState({ successMessage: 'Product created successfully!', errorMessage: '' });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok.');
            }
        } catch (error) {
            console.error('Error:', error);
            this.setState({ successMessage: '', errorMessage: `Failed to create product: ${error.message}` });
        }
    };

    fileSelectHandler = (event) => {
        const files = Array.from(event.target.files); // Convert to an array
        if (files.length > 4) {
            this.setState({ errorMessage: 'You can upload a maximum of 4 images.', imageFiles: [], imagePreviewUrls: [] });
            return;
        }

        const imagePreviewUrls = files.map(file => URL.createObjectURL(file));
        this.setState({ imageFiles: files, imagePreviewUrls });
    };

    render() {
        return (
            <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create Product
                </Typography>
                <Paper elevation={1} sx={{ p: 3, mb: 1 }}>
                    <Box component="form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        {/* Image upload input */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                Upload Product Images (Max 4)
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton
                                    color="primary"
                                    aria-label="upload images"
                                    component="label"
                                >
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={this.fileSelectHandler}
                                        multiple // Allow multiple file selection
                                    />
                                    <PhotoCameraIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                                {this.state.imagePreviewUrls.map((url, index) => (
                                    <img
                                        key={index}
                                        src={url}
                                        alt={`Product Preview ${index + 1}`}
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                ))}
                            </Box>
                        </Box>

                        <TextField
                            fullWidth
                            label="Name of product"
                            variant="outlined"
                            margin="normal"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            margin="normal"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            fullWidth
                            label="Price"
                            variant="outlined"
                            margin="normal"
                            name="price"
                            type="number"
                            value={this.state.price}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            fullWidth
                            label="Stock"
                            variant="outlined"
                            margin="normal"
                            name="stock"
                            type="number"
                            value={this.state.stock}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            fullWidth
                            label="Category ID"
                            variant="outlined"
                            margin="normal"
                            name="categoryId"
                            value={this.state.categoryId}
                            onChange={this.handleInputChange}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Create Product
                        </Button>
                    </Box>
                </Paper>
                {this.state.successMessage && (
                    <Typography variant="body1" color="success.main">
                        {this.state.successMessage}
                    </Typography>
                )}
                {this.state.errorMessage && (
                    <Typography variant="body1" color="error.main">
                        {this.state.errorMessage}
                    </Typography>
                )}
            </Container>
        );
    }
}

export default ProductCreate;
