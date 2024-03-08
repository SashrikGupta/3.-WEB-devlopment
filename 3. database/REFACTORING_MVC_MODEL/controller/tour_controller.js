const Tour =require('../models/tour_models') 

// creation of a middleware 
exports.checkTour = (req , res  , next )=>{
  
}

exports.getall = async (req, res) => {
try{
// to get all the tours present 

const tours = await Tour.find()
   res
       .status(200)
       .json({
           status: 'SUCCESS',
           data: {
               tours
           }
       });
}
catch(error){
    res
    .status(400)
    .json({
        status: 'FAILED',
        message : error 
    })
}

};
exports.putone = async (req, res) => {

    try{
    //OPTION 1

    // const newTours = new Tour({

    // })
    // newTours.save()

    //OPTION 2
    // using tours directly remember that 
    // save() returns a promise similarly.create
    // also returns a promise 
    // now to optimise code instead of using 
    //  promise chaining we will use asyn / await 

    await Tour.create(req.body) ; 


       res
           .status(201)
           .json({
               status: 'SUCCESS',
               data: {
                   tour : req.body 
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



};
exports.update = (req, res) => {

//    res.status(200).json({
//        status: 'SUCCESS',
//    });
};
exports.del = (req, res) => {
//    // your delete logic
//    res
//        .status(204)
//        .json({
//            status: 'SUCCESS',
//            data: null
//        });
};
exports.getone = async  (req, res) => {
    try{
        // to get all the tours present 
        
        const tours = await Tour.findById(req.params.id)
           res
               .status(200)
               .json({
                   status: 'SUCCESS',
                   data: {
                       tours
                   }
               });
        }
        catch(error){
            res
            .status(400)
            .json({
                status: 'FAILED',
                message : error 
            })
        }
};




