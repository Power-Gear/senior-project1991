import React from 'react';
import { Typography, Button, Box } from '@mui/material';

function Banner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', backgroundSize: 'cover', backgroundPosition: 'center' ,color: '#023047', backgroundColor: '#FFB703'  }}>
      <Typography variant="h2" color="#023047"style={{margin:'50px'}} >
        Welcome to <b>POWER GEAR</b> ! <br />
        free delivery across all Tunisia for carts over 199DT! 
      </Typography>
      <Button variant="contained" color="primary" size="large"style={{ color: '#023047', backgroundColor: '#FB8500'  ,margin:"50px",border:"solid",borderColor:'#023047'}}>
       <b>Shop Now!</b> 
      </Button>
    </Box>
  );
}

export default Banner;