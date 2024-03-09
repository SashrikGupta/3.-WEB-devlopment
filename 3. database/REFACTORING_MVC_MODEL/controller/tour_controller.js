const Tour =require('../models/tour_models') 


//-----------------QUEYRING-------------------------------------


exports.getall = async (req, res) => {
  




    // storing quer in an obj 
    // const queryObj = req.query  is WRONG as thi is just 
    // normal referencing --> change in obj will lead to change 
    // in the req.query obj hence we need to 
    // deconstruct the obj and then construct is back to obj and then
    // pass it to  queryObj 


    //----------------1a. filtering --------------------------------------------
    let queryObj = {...req.query}
    const excludeFields = ['page' , 'sort' , 'limit' , 'field'] 
    excludeFields.forEach(el => delete queryObj[el])
    //--------------------------------------------------------------------------


    //----------1st way------------------ 
    //    const tours = await Tour.find()
    //     .where('duration')
    //     .lt(5)
    //     .where('difficulty')
    //     .equals('easy')

    //-----------2nd way-----------------

    // const tours = await Tour.find(the query objec)

    // const tours = await Tour.find(queryObj) 




    // NOTE : 

    // query for operators like >= / <= / </>
    // GET 127.0.1:3000/api/v1/tours?duration[operator]=5&difficulty=easy 
    // eg  127.0.1:3000/api/v1/tours?duration[gte]=5&difficulty=easy 
    // operations : gte , gt , lte , lt 
    // this gives us the query as  { dificulty : 'easy' , duration : { gte: 5} }
    // but in actuall we need this { dificulty : 'easy' , duration : { $gte: 5} }

    // so to impliment this we crete a function that adds ths $ sign
    

    // 1b. ADVANCVED FILTERING 
    //--------------------------------------------------------------------------
    let querystr = JSON.stringify(queryObj) 
    // replaces the op to $op
    querystr = querystr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    // reassigning query 
    queryObj = JSON.parse(querystr) 
    //--------------------------------------------------------------------------

    // the find method actually returns a query and all the 
    // function can again be implimented in the query 
    // this allows us chaining functions like we did above 
    // in 1st way : hence we will first obtain query then 
    // we will process it 

    //2 step process 
    let query = Tour.find(queryObj) ; 

    // 2 . implimenting sorting 
    //--------------------------------------------------------------------------
    if(req.query.sort){
        // actuall query will be sort=price,average
        // we need to make this as sortby = [price , average]
        // this can be done by 
        const sortBy = req.query.sort.split(',').join(' ') 
        queue = query.sort(sortBy) 
    }


    const tours = await query  

    

    


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




