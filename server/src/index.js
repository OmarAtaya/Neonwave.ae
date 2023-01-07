const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require("cors")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const data = require('./data/Products.js')
const {userRouter} = require('./routes/userRoutes')

dotenv.config();
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI).then( ()=> {
    console.log("Connected to DB")
}).catch( err => {
console.log(err.message)
})
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

app.get('/api/products', (req, res) => {
    res.send(data.products)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})