import axios from 'axios';
import axiosInstance from '../axiosConfig';

const BASE_URL = axiosInstance; 
class CategoryService {
    // Create a new category
    create(category) {
      return axios.post(BASE_URL, category);
    }
  
    // Read a category by ID
    read(categoryID) {
      return axios.get(`${BASE_URL}/${categoryID}`);
    }
  
    // Update an existing category
    update(category) {
      return axios.put(`${BASE_URL}/${category.categoryID}`, category);
    }
  
    // Find all categories
    findAll() {
      return axios.get(BASE_URL);
    }
  }
  
  export default new CategoryService();