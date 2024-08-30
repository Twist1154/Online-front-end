import * as React from 'react';
import {getAllProducts} from "../services/ProductService.js";
import Button from "@mui/material/Button";
export default function ProductGetAll() {
    const [ setError] = React.useState(null);


    const handleGetAllProducts = async () => {
        try {
            const response = await getAllProducts();
            console.log('Get all products:', response.data);
        } catch (error) {
            setError('Error getting products:' + error.message);
        }
    }

    return (
        <Button sx={{width: 150, height: 100, margin: 1}} onClick={handleGetAllProducts}>
            Get all Products
        </Button>
    );
}