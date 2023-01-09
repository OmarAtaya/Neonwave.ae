const express = require('express');
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req,res) => {
    const products = await Product.find()
    res.send(products)
})

module.exports = productRouter;