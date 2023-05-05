// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();

//importing home controller
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/mobile_otp', require('./mobileOtp'));

// Export router
module.exports = router;