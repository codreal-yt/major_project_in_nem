// Express Library
const express = require('express');
// Router
const router = express.Router();
// Passport
const passport = require('passport');

// Import Home Controller
const userController = require('../controllers/user');

// Routes Method
router.get('/sign-in', userController.sign_in_page_render);
router.get('/sign-up', userController.sign_up_page_render);
router.post('/new_user_data', userController.create_user);
// use passport as a middlware to authenticate
router.post('/create-session', 
    passport.authenticate('local',{
        failureRedirect: '/user/sign-in'
    })
,userController.createSession);

// Logout User
router.get('/sign-out', userController.destroySession);
// User Feed Post
router.post('/feed', userController.feedPost);

// Export Router
module.exports = router;