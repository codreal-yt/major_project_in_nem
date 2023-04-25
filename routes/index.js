// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();

//importing home controller
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.use('/users', require('./users'));

// Export router
module.exports = router;