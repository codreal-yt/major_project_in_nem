// Importing Feed Models
const Feed = require('../models/feed');
// Importing Comment Models
const Comment = require('../models/comment');
// Importing Likes Models
const Like = require('../models/like');

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

//   New Comment Created
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

//   Likes Button Controller
exports.toggleLike = async function(req, res){
   try{

      //URL Pattern
      //likes/toggle/?id=abbbcd&type=Feed/Comment

      let likeable;
      // let deleted = false;

      if(req.query.type == 'Feed'){
          likeable = await Feed.findById(req.query.id).populate('likes');
      }else{
          likeable = await Comment.findById(req.query.id).populate('likes');
      }

      //check if a like already exists
      let existingLike = await Like.findOne({
          likeable: req.query.id,
          onModel: req.query.type,
          user: req.user._id
      });

      //if like is already exist then delete it
      if(existingLike){

         likeable.likes.pull(existingLike._id);
         likeable.save();
        await Like.findByIdAndDelete(existingLike._id)
         // Like.save();

         //  existingLike.remove();
         //  deleted = true;
          console.log('Like is Deleted');
      }else{
          let newLike = await Like.create({
              likeable: req.query.id,
              onModel: req.query.type,
              user: req.user._id
          });

          likeable.likes.push(newLike._id);   
          likeable.save();
          console.log('Like is added');
      }
      
      return res.redirect('back');
      // return res.json(200, {
      //     message: 'Request Successful',
      //     data: {
      //         deleted: deleted
      //     }
      // });

  }catch(err){
      console.log('Error in Likes', err);
      return res.redirect('back');
  }
}
