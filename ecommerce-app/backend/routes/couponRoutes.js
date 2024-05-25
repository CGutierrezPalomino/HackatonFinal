const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/coupons')
  .post(protect, admin, couponController.createCoupon)
  .get(protect, admin, couponController.getCoupons);

router.route('/coupons/:id')
  .get(protect, admin, couponController.getCouponById)
  .put(protect, admin, couponController.updateCoupon)
  .delete(protect, admin, couponController.deleteCoupon);

module.exports = router;
