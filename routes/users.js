// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();
// Passport
const passport = require('passport');

//importing sign-up/sign-in controller
const usersController = require('../controllers/userController');

router.get('/profile', usersController.profile);
router.get('/sign-up', usersController.signUp);
router.post('/create_new_user', usersController.create);
router.get('/sign-in', usersController.singIN);
// use passport as a middlware to authenticate
router.post('/create-session', 
    passport.authenticate('local',{
        failureRedirect: '/users/sign-in'
    })
,usersController.createSession);
router.get('/sign-out', usersController.destroySession);

// importing userapi controller
const userApi = require('../controllers/api/v1/user_api');

router.post('/createSession', userApi.createSession);
router.get('/api', userApi.welcome);

// Export router
module.exports = router;