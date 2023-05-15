// Importing Feed Models
const Feed = require('../models/feed');

// Feed Controller
 exports.feedPost = async function(req, res){
    // console.log(req.body.editor);
    try {
       let content = await Feed.findOne({content: req.body.editor});

       if(!content){
        Feed.create({content: req.body.editor});
        console.log("Feed is poste successfully");
        return res.redirect("back");
       }else{
        console.log("please Update some content");
        return res.redirect("back");
       }
    } catch (error) {
        console.log(`Error to create Feed content ${error}`);
        return res.redirect('back');
    }
  }