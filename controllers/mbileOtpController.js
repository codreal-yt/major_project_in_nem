// SendOTP Library
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('Auth Key', 'Your Codreal Verification code is {{otp}}, please do not share it with anybody');

// Mobile Otp template render
exports.mobileView = function(req, res){
    return res.render("mobileOtp", {
        title: 'Mobile OTP Verification'
    })
}

// Post Method after Mobile Number entered
exports.mobileNo = function(req, res){
    // console.log(req.body.number);
   
    sendOtp.send(req.body.number, "SenderID", function (error, data) {
        if(error){
            console.log(`There is some error to send OTP ${error}`);
            return res.redirect('/mobile_otp/verifiy');;
        }
        console.log('Entered user mobile no ',data);
        return res.redirect('/mobile_otp/otp-verifiy');
      });

}

// OTP Render Page
exports.otpRender = function(req, res){
    return res.render('verifiyOtp', {
        title: "OTP Verifiy"
    })
}

// OTP Entered 
exports.mobileOTP = function(req, res){
    console.log(req.body);

    sendOtp.verify("99999999", req.body.otp, function (error, data) {
        console.log(data); // data object with keys 'message' and 'type'
        if(data.type == 'success') console.log('OTP verified successfully')
        if(data.type == 'error') console.log('OTP verification failed')
      });
}

// Verified OTP Render
exports.mobileVerified = function(req, res){
    return res.send(
        '<h1 style="color: green; text-align: center">Mobile Number Verified</h1>'
    )
}