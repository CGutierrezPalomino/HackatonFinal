const Carrito = require('../models/Carrito');

exports.obtenerCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findById(req.params.id).populate('productos');
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Implementa otras funciones CRUD según necesidad
