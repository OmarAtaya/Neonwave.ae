const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
      title: { type: String, required: true,unique: false,},
      categorys: [String],unique: false,
      slug: { type: String, required: true,unique: false,},
      image: { type: String, required: true,unique: false, },
      images: [String],unique: false,
      colors: [String],unique: false,
      sizes: [String],unique: false,
      prices: [Number],unique: false,
      price: { type: Number, required: true ,unique: false,},
    },
    {
      timestamps: true,
    }
);

module.exports = Product = mongoose.model("Product", productSchema);