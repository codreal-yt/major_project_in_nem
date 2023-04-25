// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();

//importing sign-up controller
const usersController = require('../controllers/userController');

router.get('/profile', usersController.profile);
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.singIN);

// Export router
module.exports = router;