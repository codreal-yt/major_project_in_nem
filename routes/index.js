// Express Library
const express = require('express');
// Router
const router = express.Router();

// Import Home Controller
const homeController = require('../controllers/home');

// Routes Method
router.get('/', homeController.home);
router.use('/user', require('./user'));
router.use('/feed', require('./feed'));
// Export Router
module.exports = router;