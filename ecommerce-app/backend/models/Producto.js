const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  cantidadDisponible: Number
});

module.exports = mongoose.model('Producto', productoSchema);
