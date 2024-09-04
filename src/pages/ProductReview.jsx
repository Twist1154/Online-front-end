import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import {createProductReview} from "../services/ProductReviewService.js";


const ProductReview = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const review = { rating, comment };
        try {
            await createProductReview(review);
            alert('Review saved successfully!');
        } catch (error) {
            console.error('Error saving review:', error);
            alert('Error saving review. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Rating &amp; Reviews
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Review This Item
            </Typography>
            <Paper elevation={1} sx={{ p: 3, mb: 1 }}>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        label="Product Name"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Write Something"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <Typography component="legend">Rating</Typography>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={handleRatingChange}
                        precision={1}
                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={handleSubmit}
                    >
                        Submit Review
                    </Button>
                </Box>
            </Paper>
            <Typography variant="body1">
                Rating: {rating}
            </Typography>
        </Container>
    );
};

export default ProductReview;