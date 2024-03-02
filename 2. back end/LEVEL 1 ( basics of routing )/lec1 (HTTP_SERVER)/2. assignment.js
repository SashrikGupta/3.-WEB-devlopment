// q store ip adress in a text file 

//ans : 

console.log("hello") ; 
const http = require('http') ; 
const fs = require("fs") ; 

// the arraow (callback) function is resposible for 
// listening to requests and handeling them 
// takes 2 parameter req(request) and res(response) 

const myserver = http.createServer((req , res)=>{
   // q : putting ip address in your text file 
   console.log("new  req rec.") ; 
   const ip = req.connection.remoteAddress;
   fs.appendFile("log.txt" , ip , (err , data)=>{
      res.end("hello sashrik from server ") ;       
   })
   
   // you can also send html modules i.e server side rendering 
   // res contains multiple meathod like end , destroy etc...

}) ; 


// server listens to a port in this case its 8000 
// basically activates server for a perticular port / area 
// we listen to a perticular port and execute task on that 
// using listen function that takes the value of port and 
// the task assinged 

myserver.listen(8000,()=>{
   //if every thing goes according to plam 
   console.log("started the server ") ; 
})

// test your server in your browser by writing localhost:8000 
// ass soon you pass an request the response has been 
// genrated and at the end you will see that new request 
// has been computed 