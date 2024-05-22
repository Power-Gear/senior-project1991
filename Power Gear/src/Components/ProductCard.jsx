
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="body1">{product.name}</Typography>
          <Typography variant="body2" color="primary">
            ${product.price}
          </Typography>
          <Button variant="contained" size="small">
            Add to Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;