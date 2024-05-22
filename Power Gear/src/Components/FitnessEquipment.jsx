import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

function FitnessEquipment() {
  return (
    <div style={{ color: '#FFB703', backgroundColor: '#023047' }}>
      <Typography variant="h2" gutterBottom >
      Fitness Equipment:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1"  style={{ color: 'white' }}>
            (Here, tell your company's story, mission, and values)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default FitnessEquipment;