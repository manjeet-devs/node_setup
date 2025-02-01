const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    unique: true,
  },
  image_links: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Product', ProductSchema);
