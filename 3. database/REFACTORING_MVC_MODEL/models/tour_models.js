const mongoose = require('mongoose') ; 

//--------- NOTES LEC 1 ------------------
// 1. Mongose is all about model
//    a model is a blue print  which we use to 
//    create a model its like objects in java script
// 2. for CRUD we need a model
// 3. for creation of model we need Schema 

// this is how we define SCHEMA  
const tour_schema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trin : true 
        // validate: [validator.isAlpha, 'Tour name must only contain characters']
      },
      duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
      },
      maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
      },
      difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
      },
      ratingsAverage: {
        type: Number,
        default: 4.5,
      },
      ratingsQuantity: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        required: [true, 'A tour must have a price']
      },
      priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
      },
      summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a description']
      },
      description: {
        type: String,
        trim: true
      },
      imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
      },
      images: [String],
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      startDates: [Date]
    //   secretTour: {
    //     type: Boolean,
    //     default: false
    //   }
    }
    // {
    //   toJSON: { virtuals: true },
    //   toObject: { virtuals: true }
    // }
  );
  

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

