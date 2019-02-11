const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, default: 1 },
  img: String
});

module.exports = mongoose.model("Product", productSchema);
