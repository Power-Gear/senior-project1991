import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ color: '#023047', backgroundColor: '#219EBC' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
          <Button color="inherit" component={Link} to="/">
            Power Gear
          </Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={Link} to="/Categories">
            Categories
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/admin">
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
