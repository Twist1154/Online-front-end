import axios from 'axios';
import axiosInstance from '../axiosConfig';

const BASE_URL = axiosInstance; 

class ProductReviewService {
  // Get all reviews
  getAllReviews() {
    return axios.get(BASE_URL);
  }

  // Get a review by ID
  getReviewById(reviewId) {
    return axios.get(`${BASE_URL}/${reviewId}`);
  }

  // Create a new review
  createReview(review) {
    return axios.post(BASE_URL, review);
  }

  // Filter reviews by rating from 5 to 1
    filterReviewsByRating(rating) {
        return axios.get(`${BASE_URL}?rating=${rating}`);
    }

  // Filter reviews by most recent
    filterReviewsByRecent() {
        return axios.get(`${BASE_URL}?_sort=createdAt&_order=desc`);
    }  

  // Update an existing review
  updateReview(reviewId, review) {
    return axios.put(`${BASE_URL}/${reviewId}`, review);
  }

  // Delete a review
  deleteReview(reviewId) {
    return axios.delete(`${BASE_URL}/${reviewId}`);
  }
}

export default new ProductReviewService();