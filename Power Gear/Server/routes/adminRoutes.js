const express = require('express');
const router = express.Router();
const Product = require('../database/products');
const User = require('../database/users');

//require JWT token verification
router.get('/getUsers',User.getAllUsers);
router.get('/:userId', User.getOneUser);
router.delete('/:userId', User.deleteUser);
router.get('/products', Product.getAllproducts);
router.post('/add', Product.addProduct);
router.put('/:productid', Product.modifyProduct); 
router.delete('/:productid', Product.removeProduct);
module.exports = router;