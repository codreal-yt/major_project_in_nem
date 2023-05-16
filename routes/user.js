// Express Library
const express = require('express');
// Router
const router = express.Router();
// Passport
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const AVTAR_PATH = path.join('/uploads/profile/avatar');

// Import Home Controller
const userController = require('../controllers/user');

// Routes Method
router.get('/sign-in', userController.sign_in_page_render);

router.get('/sign-up', userController.sign_up_page_render);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', AVTAR_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let uploadedAvtar = multer({ storage: storage }).single('avatar');

router.post('/new_user_data', uploadedAvtar, userController.create_user);
// use passport as a middlware to authenticate
router.post('/create-session', 
    passport.authenticate('local',{
        failureRedirect: '/user/sign-in'
    })
,userController.createSession);

// Logout User
router.get('/sign-out', userController.destroySession);

// Export Router
module.exports = router;