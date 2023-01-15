const express = require("express")
const Order = require('../models/orderModel')
const orderRouter = express.Router();


orderRouter.get('/', async (req,res) => {
    const order = await Order.find()
    res.send(order)
})

orderRouter.get('/:id', async (req,res) => {
    const order = await Order.findById(req.params.id);
    if(order) {
      res.send(order);
    }
    else {
      res.status(404).send({ message: 'Product Not Found'})
    }
  })

orderRouter.post(
    "/place",async (req, res) => {
        const uids = (await Order.find()).length + 1000
        const newOrder = new Order({
            items: req.body.items,
            user: req.body.user._id,
            address: req.body.address,
            total: req.body.total,
            uid: uids
        });
        const order = await newOrder.save();
        res.status(201).send({ message: 'New Order Created', order})
      }
)

orderRouter.get(
  '/user/:id',async (req, res) => {
    const orders = await Order.find({ user: req.params.id});
    res.send(orders);
  }
);

module.exports = {orderRouter}