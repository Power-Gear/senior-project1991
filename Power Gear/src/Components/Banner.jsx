import React from 'react';
import { Typography, Button, Box } from '@mui/material';

function Banner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', backgroundSize: 'cover', backgroundPosition: 'center' ,color: '#003049', backgroundColor: '#FDF0D5'  }}>
      <Typography variant="h2" color="white">
        Welcome to Our E-commerce Store!
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Shop Now
      </Button>
    </Box>
  );
}

export default Banner;