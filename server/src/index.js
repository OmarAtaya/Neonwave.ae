const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require("cors")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const data = require('./data/Products.js')

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })