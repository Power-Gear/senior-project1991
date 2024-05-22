const express = require('express');
const router = express.Router();
const Product = require('../database/products');
const User=require("../database/users");


router.get('/products', Product.getAllproducts);
router.get('/products/:productid', Product.getOneProduct);
//JWT token 
router.post('/add',User.addUser)
router.get('/:userid',User.getOneUser)
router.put('/:userid',User.updateUser)
module.exports=router