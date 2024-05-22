import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';

// Assuming you have a product data source (e.g., API or data store)
function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId); // Replace with your logic to fetch product details

  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={product.imageUrl} alt={product.name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography variant="h6">Price: ${product.price}</Typography>
              <Button variant="contained">Add to Cart</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetails;