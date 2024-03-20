const user =require('../models/users_model')
const query = require('../models/query_model');

// function to insert the user 
exports.putone = async(req , res)=>{
   try{
      await user.create(req.body) ; 
         res
             .status(201)
             .json({
                 status: 'SUCCESS',
                 data: {
                     user : req.body 
                 }
             })
      }
      catch(error)
      {
          res
          .status(400)
          .json({
              status: 'FAILED',
              message : error 
          })
      }
   
}

// function to follow a user 
exports.follow = async (req, res) => {
  try {
    const followerName = req.body.f1;
    const followingName = req.body.f2;
    const sender = await user.findOne({ username: followerName });
    const receiver = await user.findOne({ username: followingName });
    if (!sender)   return res.status(404).json({ status: 'FAILED', message: 'Sender not found' });
    if (!receiver) return res.status(404).json({ status: 'FAILED', message: 'Receiver not found' });
    

    sender.following.push(receiver._id);
    receiver.followed.push(sender._id);

    await sender.save();
    await receiver.save();

    res.status(201).json({
      status: 'SUCCESS',
      data: {
        sender: sender,
        receiver: receiver,
        message: 'Follows have been done',
      },
    });
  } catch (error) {
    console.error('Error in follow function:', error);
    res.status(500).json({ status: 'FAILED', message: 'Internal Server Error' });
  }
};

// function to calculate rank 
exports.rank = async (req, res) => {
   try {
     const userId = req.body.id;
     if (!userId) {
       return res.status(400).json({ status: 'FAILED', message: 'User ID is required' });
     }
     const ranking = await user.getRank(userId);
     res.status(201).json({
       status: 'SUCCESS',
       data: {
         rank: ranking,
         message: 'Success in ranking',
       },
     });
   } catch (error) {
     console.error('Error in rank function:', error);
     res.status(500).json({ status: 'FAILED', message: 'Internal Server Error' });
   }
 };


// function to get a user  
exports.getuser = async (req , res)=>{
   try{
   const use = await user.findById(req.body.id)
   res.status(201)
      .json({
         status : 'SUCCESS' , 
         data : {
            user : use , 
            message : 'successfully sent user details'
         }
      })

   }catch(error){
      console.error('Error in getting user :', error);
      res.status(500).json({ status: 'FAILED', message: 'Internal Server Error' });
   }
}

// function to get all queries asked by a user
exports.getUserQuery = async (req, res) => {
   try {
       const use = await user.findById(req.body.id);
       let userQueries = [];
       let tagCounts = {
           "competetive": 0,
           "web dev": 0,
           "acedemic": 0,
           "machine learning": 0,
           "cyber security": 0,
           "others": 0
       } ;
       for (const queryId of use.queries) {
           const queryObj = await query.findById(queryId);
           userQueries.push(queryObj);

           // Count the occurrences of each tag
           tagCounts[queryObj.tag]++;
       }

       res.status(200).json({
           status: 'SUCCESS',
           data: {
               queries: userQueries,
               tagCounts: tagCounts,
               message: 'Successfully sent user details'
           }
       });
   } catch (error) {
       console.error('Error in getting userQueries:', error);
       res.status(500).json({ status: 'FAILED', message: 'Internal Server Error' });
   }
};

// getting all users sorted in accordance to points 

exports.getAllUsersSortedByPoints = async (req, res) => {
   try {
       const users = await user.find().sort({ points: -1 }); // Sort by points in ascending order
       res.status(200).json({
           status: 'SUCCESS',
           data: {
               users: users,
               message: 'Successfully fetched users sorted by points'
           }
       });
   } catch (error) {
       console.error('Error in getting users sorted by points:', error);
       res.status(500).json({ status: 'FAILED', message: 'Internal Server Error' });
   }
};
