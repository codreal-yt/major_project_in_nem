// User Models
const Users = require('../models/user');
// Feed Models
const Feed = require('../models/feed');

// Home Page Controller
exports.home = async function(req, res){

   try {
    // Finding User Details
    if(req.session.passport.user){
        let userDetails = await Users.findById(req.session.passport.user);
        // Populate the user of each post
        let postUser = await Feed.find({}).populate('user').populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
        
        // console.log(postUser);
        return res.render("home", {
            title: 'HOME | Codreal Social Site',
            profile: userDetails,
            feeds: postUser
        })
    }else{
        return res.render("home", {
            title: 'HOME | Codreal Social Site'
        })
    }

   
   } catch (error) {
    console.log(`There is some error at Home page ${error}`);
    return res.redirect('/user/sign-in');
   }
}
