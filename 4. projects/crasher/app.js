const morgan = require('morgan') ; 
const express = require('express');
const app = express();
const user_router = require('./routes/user_router') ;
const query_router = require('./routes/query_router') ; 


app.use(morgan('dev')) ;  
app.use(express.json());

// app.use((req , res , next)=>{
//     req.requestTime = new Date().toISOString() ; 
//     next() ; 
// })
// app.use('/api/v1/tours' , tour_router) ; 
 app.use('/query' , query_router ) ; 
 app.use('/' , user_router) ;

module.exports = app ; 