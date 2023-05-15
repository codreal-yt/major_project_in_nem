// Express Library
const express = require('express');
// Router
const router = express.Router();

// Import Home Controller
const userController = require('../controllers/user');

// Routes Method
router.get('/sign-in', userController.sign_in_page_render);
router.get('/sign-up', userController.sign_up_page_render);

// Export Router
module.exports = router;