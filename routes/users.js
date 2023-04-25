// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();

//importing sign-up controller
const usersController = require('../controllers/userController');

router.get('/profile', usersController.profile);
router.get('/sign-up', usersController.signUp);
router.post('/create_new_user', usersController.create);
router.get('/sign-in', usersController.singIN);
router.post('/create-session', usersController.createSession);
router.get('/sign-out', usersController.destroySession);

// Export router
module.exports = router;