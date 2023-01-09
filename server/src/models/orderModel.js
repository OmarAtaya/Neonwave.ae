const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {

        items: {type: [Object],},
        useremail: {type: String,},
        total: {type: String,},
        totaltax: {type: String,},
        address: {type: Object}


    },
    {
        timestamps: true,
    }
);


module.exports = Order = mongoose.model("Order", orderSchema);