const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/:id', carritoController.obtenerCarrito);

module.exports = router;
