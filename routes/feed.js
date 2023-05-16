// Express Library
const express = require('express');
// Passport
const passport = require('passport');
// Router
const router = express.Router();

// Importing feed Controller
const feedController = require('../controllers/feed');

router.post('/feed_data', feedController.feedPost);
router.post('/create', passport.checkAuthentication, feedController.cooment_create);
router.get('/toggleLike', feedController.toggleLike);

// Export Router
module.exports = router;