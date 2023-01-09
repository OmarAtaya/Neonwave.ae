const express = require('express');
const { products } = require('../data/Products');
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req,res) => {
    const products = await Product.find()
    res.send(products)
})

productRouter.get('/:title', async (req,res) => {
    const product = await products.filter(x => x.title.includes((req.params.title).toUpperCase()));
    if(product) {
      res.send(product);
    }
    else {
      res.status(404).send({ message: 'Product Not Found'})
    }
})

module.exports = productRouter;