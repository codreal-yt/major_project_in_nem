// Express Library
const express = require('express');
// Router
const router = express.Router();

// Importing feed Controller
const feedController = require('../controllers/feed');

router.post('/feed_data', feedController.feedPost);

// Export Router
module.exports = router;