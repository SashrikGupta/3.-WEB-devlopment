const express = require('express') ; 
const cors = require('cors') ; 
const socket = require('socket.io') ;
const http = require('http')
const server = socket.Server ; 

// createing a basic app 
const app = express() ;
app.use(cors())


// creating a basic cuircit 
const serv = http.createServer(app) ;
const io = new server(serv ,{
   cors :{
      origin : '*',
      methods : ["GET" , "POST"] , 
      credentials : true  , 
   }
})  ; 

// turning the curcit on
// we have now made a cuircit and now
// since cuicit have been created it gives back socket  



io.on("connection" , (socket)=>{
      console.log("user connected")
      console.log("id : " , socket.id) ; 

      // this is the syntax for emiting a request to 
      // socket.emit("event_name" , "material to be sent ")
      socket.emit("welcome" , "welcome to the server") ;
      
      
      // the broadcant method
      // in the broadcast method what happens is 
      // that except the socket everybody else in 
      // the curirct recieve the message 
      // for eg  , user has joined 
      // this will only be diplayed to every body else 
      // other than the actual user 

      socket.broadcast.emit("enter"  , `user : ${socket.id} has now entered `)
})





app.get("/" , (req,res)=>{
   res.send("hello world") ; 
})

serv.listen(3000 , (req , res )=>{
   console.log("server has been started ")
})