const mongoose = require('mongoose') ; 

//--------- NOTES LEC 1 ------------------
// 1. Mongose is all about model
//    a model is a blue print  which we use to 
//    create a model its like objects in java script
// 2. for CRUD we need a model
// 3. for creation of model we need Schema 

// this is how we define SCHEMA  
const tour_schema = new mongoose.Schema({
   name : {
       type : String , 
       required : [true , "tour should have a name "] , // constraints 
//      field : [the value , validator ]
       unique : true 
   },
   raiting : {
       type : Number , 
       default : 4.3   // constraint 
   },
   Price : {
       type : Number , 
       required : [true  , "tour mus have a price"] // error display for constarint 
   }
})

//this is how we define MODEL 

// const model_variable = mongoose.model('model_name' , 'model_schema')
const Tour = mongoose.model('Tour' , tour_schema) ; 

module.exports = Tour ; 

// creating a new test variable

 // under standing the below code
// const test_tour = new Tour({
//     name : 'THE Forest Hiker',
//     raiting : 4.7 , 
//     Price : 497 , 
// }) ; 

// this can really be seen as creating object of a class
// where test_tour is actually the instance of class Tour
// chich has ben constructed over the values provided 
// by the user in the constructor 
// now this is just an anology and not how actually things work 
// now this variable has couple of methods in it that can 
// be used to interact with the data base 

// for eg , test_tour.save() : will actually save your data in databse 
// this .save() actually returns a promise that cane be then used 


// test_tour.save().then(doc=>console.log(doc)).catch((err=>{
//     console.log(err)
// }))

