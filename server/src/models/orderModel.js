const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        items: {type: [Object],},
        user: {type: String,},
        total: {type: String,},
        address: {type: Object},
        uid: {type: Number}
    },
    {
        timestamps: true,
    }
);


module.exports = Order = mongoose.model("Order", orderSchema);