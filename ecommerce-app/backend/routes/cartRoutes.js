const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.post('/add', cartController.addToCart);
router.post('/remove', cartController.removeFromCart);
router.post('/apply-coupon', cartController.applyCoupon);

module.exports = router;
