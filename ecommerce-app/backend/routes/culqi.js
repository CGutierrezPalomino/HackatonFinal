const express = require('express');
const router = express.Router();
const culqiController = require('../controllers/culqiController');

router.post('/charge', culqiController.generarCargo);

module.exports = router;
