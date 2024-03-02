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

app.get('/api/v1/tours/:id', (req, res) => {

   const requested_id = req.params.id * 1 ; 
   console.log(requested_id) ; 
   console.log(req.params) ; 
   const tour =tours_data.find((element)=>{
    if(element.id === requested_id) return element ;
   })
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
});
app.post('/api/v1/tours' , (req , res)=>{
   const newid = tours_data[tours_data.length-1].id+1 ; 
   const newtour = Object.assign({id : newid} , req.body) ;
   tours_data.push(newtour) ; 
   fs.writeFile("./API MATERIALS\\dev-data\\data\\tours-simple.json" , JSON.stringify(tours_data) , (err , data)=>{
   res
      .status(201) 
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

// for updation we have two HTTP verbs 
// 1. PATCH and 2. PUT
// |            |
// |            +---> for entirely new data creation 
// |
// +---> for just updations inside the data 

app.patch('/api/v1/tours/:id' , (req,res)=>{
    // update here 
    res.status(200).json({
      status : 'SUCCESS' , 
      data:{
         tour : tours_data
      }
    })
}) ; 
app.delete('/api/v1/tours/:id' , (req , res)=>{

   // your delete logic 
   res
      .status(204)
      .json({
      status : 'SUCCESS' , 
      data : null
   }) ;  
})


// +---------+
// |    |    |
// |----o----|
// |    |    |
// +---------+

