console.log("hello") ; 
const http = require('http') ; 

// the arraow (callback) function is resposible for 
// listening to requests and handeling them 
// takes 2 parameter req(request) and res(response) 

const myserver = http.createServer((req , res)=>{
   console.log("new  req rec.") ; 
   //end the response by assigning some task
   // some functions are associated with req such ase headers 
   // these display the source
   // console.log(req.headers) ; 
   //understanding req object 
   console.log(req) ;
   res.end("hello sashrik from server ") ; 
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