import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import ProductCard from './ProductCard';

function FeaturedProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tech Fleece Joggers",
      category: "Bottoms",
      description: "Stay warm and comfortable during your next workout with these soft and stylish fleece joggers.",
      imageUrl: "https://placeimg.com/640/480/fashion/tech",
      price: 49.99,
    },
    {
      id: 2,
      name: "Performance Training Tee",
      category: "Tops",
      description: "This breathable and moisture-wicking tee keeps you cool and dry during your toughest workouts.",
      imageUrl: "https://placeimg.com/640/480/fashion/sports",
      price: 29.99,
    },
    {
      id: 3,
      name: "Water-Resistant Windbreaker Jacket",
      category: "Jackets",
      description: "Block out the wind and rain with this lightweight and water-resistant jacket.",
      imageUrl: "https://placeimg.com/640/480/fashion/outdoors",
      price: 79.99,
    },
    {
      id: 4,
      name: "High-Performance Sports Bra",
      category: "Bras",
      description: "Provides maximum support and comfort for high-impact activities.",
      imageUrl: "https://placeimg.com/640/480/fashion/sportswear",
      price: 34.99,
    },
    {
      id: 5,
      name: "Quick-Drying Compression Shorts",
      category: "Bottoms",
      description: "These lightweight and quick-drying shorts offer excellent compression and moisture management.",
      imageUrl: "https://placeimg.com/640/480/fashion/activewear",
      price: 24.99,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Replace with your logic to fetch product data (e.g., API call)
//         const response = await fetch('https://your-api.com/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (isLoading) {
//     return <Typography variant="body1">Loading Products...</Typography>;
//   }

//   if (error) {
//     return <Typography variant="body1">Error: {error.message}</Typography>;
//   }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FeaturedProducts;