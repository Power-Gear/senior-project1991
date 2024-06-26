import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  actionButton: {
    marginLeft: theme.spacing(1),
  },
}));

const ProductsPage = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: '', name: '', price: '', image: '' });
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Admin/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/Admin/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const openEditDialog = (product) => {
    setCurrentProduct(product);
    setEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditDialogOpen(false);
    setCurrentProduct({ id: '', name: '', price: '', image: '' });
    setImage(null);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updateProduct = async () => {
    try {
      if (image) {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.post('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        currentProduct.image = response.data.imageUrl;
      }

      await axios.put(`http://localhost:5000/Admin/products/${currentProduct.id}`, currentProduct);
      fetchProducts();
      closeEditDialog();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <List className={classes.list}>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`Price: $${product.price}`} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => openEditDialog(product)}
                className={classes.actionButton}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteProduct(product.id)}
                className={classes.actionButton}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Dialog open={editDialogOpen} onClose={closeEditDialog}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the details of the product below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={currentProduct.name}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={currentProduct.price}
            onChange={handleEditInputChange}
          />
          <input type="file" onChange={handleImageChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={updateProduct} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
