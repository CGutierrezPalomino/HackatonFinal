const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definir una sola ruta para el inicio de sesión
router.post('/login', userController.loginUser);

module.exports = router;
