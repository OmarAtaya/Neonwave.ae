module.exports = async (req,res) => {

    const stripe = require('stripe')("sk_test_51MO3ikBUTI34VUZeK5UAo3hqsj1pxK0d1hRaGqUyHcHwkqxOzBh9BA1vFZ9Z7cXwvDO8WtyXwkYeDLOZS76VnOQy008B5aSBFL")
    const order = req.body.orderId

    try {
        const session = await stripe.checkout.sessions.create( {
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map( item => {
                return {
                    price_data: {
                        currency: 'aed',
                        product_data: {
                            name: item.title
                        },
                        unit_amount: (item.total * 100)
                    },
                    quantity: item.quantity1,
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