module.exports = async (req,res) => {

    const stripe = require('stripe')("sk_test_51MO3ikBUTI34VUZeK5UAo3hqsj1pxK0d1hRaGqUyHcHwkqxOzBh9BA1vFZ9Z7cXwvDO8WtyXwkYeDLOZS76VnOQy008B5aSBFL")
    const Axios = require("axios")
    const userModel = require("../models/userModel")
    const itemStore = await Axios.get('http://localhost:5000/api/products')
    const storeItems = new Map(
        itemStore.data.map(object => {
            return [object._id, {priceinFills: object.price * 100, name: object.name}]
        })
    )
    const order = req.body.orderId

    try {
        const session = await stripe.checkout.sessions.create( {
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map( item => {
                const storeItem = storeItems.get(item._id)
                return {
                    price_data: {
                        currency: 'aed',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceinFills * 1.05
                    },
                    quantity: item.quantity,
                }
            }),
            success_url:`http://localhost:3000/order_placed/?id=${order.order._id}`,
            // TODO: id?${order._id}
            // ${req.body.orderId}
            cancel_url:'http://localhost:3000/cart'
        })
        res.json( {url: session.url})
    }catch(e) {
        res.status(500).json( {error: e.message})
    }
}