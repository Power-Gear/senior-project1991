import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

function AboutUs() {
  return (
    <div style={{ color: '#003049', backgroundColor: '#FDF0D5' }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            (Here, tell your company's story, mission, and values)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent style={{ color: '#003049', backgroundColor: '#FDF0D5' }}>
              <Typography variant="h5" style={{ color: '#003049', backgroundColor: '#FDF0D5' }}>Our Team</Typography>
              <Grid container spacing={1}>
                {/* Add team member details here using Avatar and Typography components */}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;