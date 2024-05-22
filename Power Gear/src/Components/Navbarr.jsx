import React,{useState} from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
  const [category,setcategory] = useState(null);

  const handleClick = (event) => {
    setcategory(event.currentTarget);
  };

  const handleClose = () => {
    setcategory(null);
  };

  return (
    <AppBar position="static" style={{ color: '#003049', backgroundColor: '#FDF0D5' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} style={{ display: 'flex' }} >
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
          <Button color="inherit" component={Link} to="/">
            Power Gear
          </Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
         
          <Button
            color="inherit"
            aria-controls="categories-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Categories
          </Button>
          <Menu
            id="categories-menu"
            category={category}
            keepMounted
            open={Boolean(category)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/category1" onClick={handleClose}>Category 1</MenuItem>
            <MenuItem component={Link} to="/category2" onClick={handleClose}>Category 2</MenuItem>
            <MenuItem component={Link} to="/category3" onClick={handleClose}>Category 3</MenuItem>
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
