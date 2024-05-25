const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, cartController.addToCart);
router.delete('/', protect, cartController.removeFromCart);
router.post('/apply-coupon', protect, cartController.applyCoupon);

module.exports = router;
