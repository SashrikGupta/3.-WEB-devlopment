const express = require('express') ; 
const fs = require('fs')  ; 
const app = express() ; 

const port = 8000 ; 
app.listen(8000 , (req , res)=>{console.log("server has been started at port : 8000") ; })

app.use(express.json()) ; 

const dir = "API MATERIALS";
const tours_data = JSON.parse(
    fs.readFileSync(`./API MATERIALS\\dev-data\\data\\tours-simple.json`, "utf-8")
);


//we need to make our routes capable of accepting variables 

app.get('/api/v1/tours', (req, res) => {
    res
        .status(200) 
        .json({
            status: 'SUCCESS',
            results: tours_data.length ,  
            data: {
                tours: tours_data
            }
        });
});

// for declaration of variables we use syntax /:
// but /api/v1/tours/:id using this as parameters
// restricts your capability 
// hence therefore we look for optional params 
// /api/v1/tours/:id/:x? is an optional api link 

app.get('/api/v1/tours/:id', (req, res) => {

   //hack
   //basically in java script if you multiply a string by 1 
   // and the string is a number in string format it
   // then returns the neumric value

   const requested_id = req.params.id * 1 ; 
   console.log(requested_id) ; 
   console.log(req.params) ; 
   // this will let you see parameters 
   const tour =tours_data.find((element)=>{
    if(element.id === requested_id) return element ;
   })
   // if not found then status should be 404
   if(!tour) res.status(404).send("not found") ; 
   else{
      res
      .status(200) 
      .json({
          status: 'SUCCESS',
          results: 1 ,  
          data: {
              tours: tour 
          }
      });
   }
   // if found than status should be 200

});

app.post('/api/v1/tours' , (req , res)=>{
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
