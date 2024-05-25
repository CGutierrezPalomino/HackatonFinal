const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para crear un nuevo producto
router.post('/', productController.createProduct);

module.exports = router;
