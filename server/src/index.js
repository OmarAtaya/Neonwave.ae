const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require("cors")
const app = express()
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const data = require('./data/Products.js')
const {userRouter} = require('./routes/userRoutes.js')
const seedRouter = require('./routes/seedRoutes.js')
const productRouter = require('./routes/productRoutes.js')
const {orderRouter} = require('./routes/orderRoutes.js')
const checkOutSessions = require('./functions/checkoutSession')


dotenv.config();
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI).then( ()=> {
    console.log("Connected to DB")
}).catch( err => {
console.log(err.message)
})
app.use(express.json())
app.use(cors())
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/users', userRouter)
app.use(express.urlencoded({extended: true}))

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

app.post('/create-checkout-session', checkOutSessions)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})