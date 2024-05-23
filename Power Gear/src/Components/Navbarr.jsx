import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={{ color: '#023047', backgroundColor: '#219EBC' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Power Gear
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" onClick={handleMenuClick}>
            Categories
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/categories">
              Category 1
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/categories">
              Category 2
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/categories">
              Category 3
            </MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
