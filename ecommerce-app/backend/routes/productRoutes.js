const express = require('express');
const router = express.Router();

// Importar el controlador de productos
const productController = require('../controllers/productController');

// Definir las rutas para los productos
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
