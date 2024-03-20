const Query = require('../models/query_model');
const User = require('../models/users_model');
const moment = require('moment');

const NULLID = "65f9b0df8cf576d27969a832";

exports.postQuery = async (req, res) => {
    try {
        const userId = req.body.author;
        req.body.solver = NULLID;
        const query = await Query.create(req.body);
        const user = await User.findById(userId);

        // Check if points in req.body are greater than user's points
        if (req.body.points > user.points) {
            return res.status(500).json({
                status: 'FAILED',
                message: 'Not eligible to raise query. Insufficient points.'
            });
        }

        // Update points
        user.points -= req.body.points;

        // Update queries
        user.queries.push(query);

        // Update activity
        const currentDate = moment();
        const formattedDate = currentDate.format('YYYY-MM-DD');

        // Check if Today exists in activity array
        const activityIndex = user.activity.findIndex(item => item.date === formattedDate);

        if (activityIndex !== -1) {
            // Increment value by 10 if date already exists
            user.activity[activityIndex].value += 10;
        } else {
            // Add date with value 10 if date doesn't exist
            user.activity.push({ date: formattedDate, value: 10 });
        }

        await user.save();

        res.status(201).json({
            status: 'SUCCESS',
            data: {
                user: req.body
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'FAILED',
            message: error.message
        });
    }
};


exports.getall = async(req , res)=>{
   try {
      const queries = await Query.find().sort({ points: -1 });
      res.status(200).json({
          status: 'SUCCESS',
          data: {
              users: queries,
              message: 'Successfully fetched queries sorted by points'
          }
      });
  } catch (error) {
      console.error('Error in getting queries sorted by points:', error);
      res.status(500).json({ status: 'FAILED', message: 'Internal Server Error' });
  }
}