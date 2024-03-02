const express = require('express') ; 
const fs = require('fs')  ; 
const app = express() ; 

const port = 8000 ; 
app.listen(8000 , (req , res)=>{console.log("server has been started at port : 8000") ; })



//-----------------> including the middle ware (reffer notes below) -----------
app.use(express.json()) ; // syntax for using a middleware 
// here express.json() is the middle ware 
// middle ware is basically a function that can modify 
// the incoming request comming from a server 
// known as middle ware as it stands between the client and the server 
// here the middleware task is to add data in the server 






// creating a page 
// it is a good practice to write your current version 
// of api  that is v1 so in case you encounter some updations 
// old users will still v1 
// can also do in sub domain but it is easy to juast do in url



// for reading the api we dont do it inside the handler 
// instead we do it before 

//--------------------------------------------------------
// NOTE : THE TOP LEVEL CODE ONLY EXECUTES ONCE IN THE 
// ENTIRE STARTING OF WEBSITE  
//-------------------------------------------------------
const dir = "API MATERIALS";
const tours_data = JSON.parse(
    fs.readFileSync(`./API MATERIALS\\dev-data\\data\\tours-simple.json`, "utf-8")
);

app.get('/api/v1/tours', (req, res) => {
    // this url sends all the tours 
    res
        .status(200) // this is how you set status 
        .json({
            status: 'SUCCESS',
            results: tours_data.length ,  
            data: {
                tours: tours_data
            }
        });
});

//-----using post request to add tours ------------------
// to encourage restfullness we keep the api same 
// we just chaneg the http verb 

//-------------------------NOTES V.V.V.IMP---------------------------------

// 1. in the post request we send data from client to server 
// 2. then this daat should be ideally avilable at the request 
// 3. request object witholds all the data sended by the user 
// 4. now express " DOSE NOT " drop that data to request 
// 5. hence we need to use some sort of middleware 
// 6. middleware in itself is a very big topic for now 
// 7. i am going to impliment a small scaled version of middle ware 

app.post('/api/v1/tours' , (req , res)=>{

   // request response cycle 
   // console.log(req.body) ; 
   // insted of just using console 
   // now we will truy to simulate 
   // serverless database management 
   // NOTE : YOU ARE ONLY ALLOED TO SEND RESPONSE ONCE IN THE CALLBACK
   const newid = tours_data[tours_data.length-1].id+1 ; 
   const newtour = Object.assign({id : newid} , req.body) ;
   tours_data.push(newtour) ; 
   fs.writeFile("./API MATERIALS\\dev-data\\data\\tours-simple.json" , JSON.stringify(tours_data) , (err , data)=>{
   res
      .status(201) // code for creation 
      .json(
         {
            status : 'SUCCESS' , 
            data : {
               tour : newtour
            }
         }
      )
   })
}); 
