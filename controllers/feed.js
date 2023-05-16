// Importing Feed Models
const Feed = require('../models/feed');
// Importing Comment Models
const Comment = require('../models/comment');

// Feed Controller
 exports.feedPost = async function(req, res){
    // console.log(req.body.editor);
    try {
       let content = await Feed.findOne({content: req.body.editor});

       if(!content){
        Feed.create({content: req.body.editor, user: req.user._id});
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

  exports.cooment_create = async function(req, res){

   try {
      console.log(req.body);
      let post = await Feed.findById(req.body.post);
      // console.log('User Feed:',post);
      if(post){
       let comment = await  Comment.create({
            content: req.body.content,
            post: req.body.post,
            user: req.user._id
         })
         // console.log(`Comment data push in post feed ${comment}`);
         post.comments.push(comment);
         post.save();
         return res.redirect('back');
      }else{
         console.log('Error to find Post Feed');
         return res.redirect('back');
      }
   } catch (error) {
      console.log(`Error to create comment ${error}`);
      return res.redirect('back');
   }
  }