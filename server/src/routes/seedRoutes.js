const express = require("express");
const Product = require( "../models/productModel.js");
const data  = require("../data/Products");
const seedRouter = express.Router();

seedRouter.get("/" , async (req, res) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products)
    // await userModel.remove({});
    // const createdUsers = await userModel.insertMany(data.users)
    // res.send({ createdProducts, createdUsers})
    res.send({ createdProducts})
})

module.exports = seedRouter;