const express = require('express');
const router = express.Router();
const Product = require('../database/products');
const User=require("../database/users");



router.post('/add',User.addUser)
router.get('/:userid',User.getOneUser)
router.put('/:userid',User.updateUser)
router.get('/get', Product.getAllproducts);
router.get('/:productid', Product.getOneProduct);
module.exports=router