// JsonWebToken library
const jwt = require('jsonwebtoken');

// Users Models
const Users = require('../../../models/users');

//User sign-in and creating the sessions
module.exports.createSession = async function(req, res){
    
    try {
        let secret_key = 'NEM';
        let user = await Users.findOne({email: req.body.email});
        // console.log('api data',req.body);
        if(!user || user.password != req.body.password){
          
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        return res.status(200).json({
            message: "SignIn Successfully, here is your token",
            data: {
                token: jwt.sign(user.toJSON(), secret_key, {expiresIn: '100000'})
            }
        });

    }catch(err){
        console.log('***********Error in SignIN', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

exports.welcome = (req, res)=>{
    return res.status(200).json({
        message: 'Welcome to Codreal API'
    })
}