const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  productos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto'
  }],
  total: Number
});

module.exports = mongoose.model('Carrito', carritoSchema);
