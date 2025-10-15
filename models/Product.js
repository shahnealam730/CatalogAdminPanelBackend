const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  modelUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
