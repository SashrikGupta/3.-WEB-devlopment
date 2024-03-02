const express = require('express') ; 
const fs = require('fs')  ; 
const app = express() ; 

const port = 8000 ; 
app.listen(8000 , (req , res)=>{console.log("server has been started at port : 8000") ; })

// creating a page 
// it is a good practice to write your current version 
// of api  that is v1 so in case you encounter some updations 
// old users will still v1 
// can also do in sub domain but it is easy to juast do in url



// for reading the api we dont do it inside the handler 
// instead we do it before 

//--------------------------------------------------------
// NOTE : THE TOP LEVEL CODE ONLY EECUTES ONCE IN THE 
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

 


