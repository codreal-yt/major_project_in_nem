// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();

//importing home controller
const homeController = require('../controllers/homeController');
//importing user profile controller
const userProfileController = require('../controllers/userProfileController');

router.get('/', homeController.home);
router.get('/profile', userProfileController.profile);

// Export router
module.exports = router;