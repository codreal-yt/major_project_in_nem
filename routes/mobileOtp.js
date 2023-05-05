// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();

// Importing Mobile OTP controller
const OtpController = require('../controllers/mbileOtpController');

router.get('/verifiy', OtpController.mobileView);
router.post('/mobileno', OtpController.mobileNo);
router.get('/otp-verifiy', OtpController.otpRender);
router.post('/otp', OtpController.mobileOTP);
router.get('/success', OtpController.mobileVerified);

// Export router
module.exports = router;