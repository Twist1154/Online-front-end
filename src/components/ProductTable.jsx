import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'productID', headerName: 'Product ID', width: 100 },
    { field: 'categoryID', headerName: 'Category ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'description', headerName: 'Description', width: 100 },
    { field: 'price', headerName: 'Price', width: 100, type: 'number' },
    { field: 'stock', headerName: 'Stock', width: 50, type: 'number' },
    { field: 'reviewID', headerName: 'Review ID', width: 100 },
    { field: 'imageID', headerName: 'Image ID', width: 100 },
];

export default function ProductTable({rows}){
    // const [open, setOpen] = React.useState(false);
    return(
        <div style={{ height: 400, width: 'auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.productID}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 }, // Initial pagination settings
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}

ProductTable.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
        productID: PropTypes.string,
        categoryID: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        reviewID: PropTypes.string,
        imageID: PropTypes.string,
    }))
}