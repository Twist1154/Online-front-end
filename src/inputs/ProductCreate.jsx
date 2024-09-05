// import * as React from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

export default function ProductCreate(){

    return(
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="productid"
                    label={"Product ID"}
                />
                <TextField
                    id="categoryid"
                    label={"Category ID"}
                />
                <TextField
                    id="name"
                    label={"Name of product"}
                />
                <TextField
                    id="description"
                    label={"Description"}
                />
                <TextField
                    id="price"
                    label={"Price"}
                />
                <TextField
                    id="stock"
                    label={"stock"}
                />
                <TextField
                    id="reviewid"
                    label={"Review ID"}
                />
                <TextField
                    id="productimageid"
                    label={"Product image ID"}
                />
                <div>
                    <Box>
                        <Button
                            variant="contained"
                            sx={{ width: 250, height: 56, margin: 2}}
                        >
                            Create product
                        </Button>
                    </Box>
                </div>
            </div>
        </Box>
    );
}