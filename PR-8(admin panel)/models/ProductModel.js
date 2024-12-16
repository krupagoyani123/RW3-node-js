const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
  exsubcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exsubcategory",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  qty:{
    type:Number,
    default : 1,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
const product = mongoose.model("product", productSchema);
module.exports = product;