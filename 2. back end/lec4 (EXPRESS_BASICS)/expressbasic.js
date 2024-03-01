console.log("hello");
// aquiring express 

// step 1 : impoting express
const express = require('express') ; 
// now we create an app 

const app = express() ; 
// this app is basically an handler function

// step 2 : server creation 
app.listen(8000 , ()=>{console.log("server started");})
// basic syntax for creating an application 

// app.get('path' , handler callback function )

// step 3 : different handlers for different pathings 
   app.get('/' , (req , res)=>{
      return res.send(" hello from home page ") ; 
   }) ; 
   // query processing 
   app.get('/about' , (req , res)=>{
      return res.send(" hello from about page  hey : " + req.query.name + " of age " + req.query.age) ; 
   }) ; 
// similarly you can use post 


// basic routing 

// app.METHOD(PATH  , HANDLER) ; 
// app     --> instance of express 
// METHOD  --> HTTP request method 
// PATH    --> server path 
// HANDLER --> function to be executed once route has been matched 



 


