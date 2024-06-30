const mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
  {
    image: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
      type: String
    }

},
  { timestamps: true }
);

const ProductModel= mongoose.model("ProductModel", productSchema)

module.exports = ProductModel
