const Tour =require('../models/tour_models') 
const APIFeatures = require('../utils/APIFeature')




// aliasing 
exports.aliasTopTours = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
  };

//-----------------QUEYRING-------------------------------------


exports.getall = async (req, res) => {
  
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query;


        try {
            res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
              tours
            }
          });
        } catch (err) {
          res.status(404).json({
            status: 'fail',
            message: err
          });
        }
};



//----------------------------C.R.U.D----------------------------

// the below is the way all the crud operations that can be processed
// using mongoose and mongo db 


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
exports.update = async (req, res) => {
try{

 const tour = await Tour.findByIdAndUpdate(req.params.id , req.body , 
    {
        new : true , 
        runValidators : true 
    }
    )   ; 

    res.status(200).json({
        status :'success' , 
        data : {
            tour
        }
    })

} catch(error){
    res
    .status(400)
    .json({
        status: 'FAILED',
        message : error 
    })
}
};
exports.del = async (req, res) => {
    try{
    
     const tour = await Tour.findByIdAndDelete(req.params.id) ; 
        res.status(200).json({
            status :'success' , 
            data : {
                null : null  
            }
        })
    
    } catch(error){
        res
        .status(400)
        .json({
            status: 'FAILED',
            message : error 
        })
    }
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




