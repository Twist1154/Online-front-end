import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import * as React from "react";
import {deleteProduct} from "../services/ProductService.js";

export default function ProductDelete() {
    const [productID, setProductID] = React.useState('');
    const[product, setProduct] = React.useState(null);
    const[error, setError] = React.useState(null);

    const handleDeleteProduct = async () => {
        try{
            const response = await deleteProduct(productID);
            setProduct(response);
            console.log('Deleted product: ', response.data);
        } catch (error) {
            setError('Error deleting product: ' + error.message);
            setProduct(null); // Clears product if error occurs
        }
    };

    const handleProductIDChange = (event) => {
        setProductID(event.target.value);
    };

    return (
        <div>
            <Box>
                <TextField
                    label="Product ID"
                    value={productID}
                    onChange={handleProductIDChange}
                    margin="normal"
                />
                <Button
                    variant="contained"
                    sx={{ width: 250, height: 56, margin: 2}}
                    onClick={handleDeleteProduct()}
                >
                    Delete product
                </Button>
            </Box>
        </div>
    );
}