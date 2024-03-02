const express = require('express');
const fs = require('fs');
const app = express();

const port = 8000;
app.listen(8000, (req, res) => {
    console.log("server has been started at port: 8000");
});

app.use(express.json());

// a GREAT point to note is that 
// middleware actually applies to all 
// requests and responses 


//creating our own middleware function 
// as discussed that in each middleware function one 
// takes request response and the next function
// hence when we use app.use to genrate a middleware 
// we actually get access to  thses three parameters 
// 1. request , 2. response , 3. next function 


app.use((req , res , next)=>{
    console.log("hello from middleware 1 : 🫠 ") ;
    // . !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // NOW ITS VERY VERY VERY IMPORTANT TO CALL THE NEXT PROCESS
    // IF WE DIDNT THEN THE REQUEST RESPONSE CYCLE WOULD 
    // REALLY BE STUCK AT ONE MIDDLEWARE 
    // . !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    next() ; 
});

app.use((req , res , next)=>{
    req.requestTime = new Date().toISOString() ; 
    next() ; 
})

const dir = "API MATERIALS";
const tours_data = JSON.parse(
    fs.readFileSync(`./API MATERIALS\\dev-data\\data\\tours-simple.json`, "utf-8")
);

//------------------routes---------------------

const getall = (req, res) => {
    res
        .status(200)
        .json({
            status: 'SUCCESS',
            results: tours_data.length,
            requested_at: req.requestTime , 
            data: {
                tours: tours_data
            }
        });
};

const putone = (req, res) => {
    const newid = tours_data[tours_data.length - 1].id + 1;
    const newtour = Object.assign({ id: newid }, req.body);
    tours_data.push(newtour);
    fs.writeFile("./API MATERIALS\\dev-data\\data\\tours-simple.json", JSON.stringify(tours_data), (err, data) => {
        res
            .status(201)
            .json({
                status: 'SUCCESS',
                data: {
                    tour: newtour
                }
            });
    });
};

const update = (req, res) => {
    // update here
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            tour: tours_data
        }
    });
};

const del = (req, res) => {
    // your delete logic
    res
        .status(204)
        .json({
            status: 'SUCCESS',
            data: null
        });
};

const getone = (req, res) => {
    const requested_id = req.params.id * 1;
    console.log(requested_id);
    console.log(req.params);
    const tour = tours_data.find((element) => {
        if (element.id === requested_id) return element;
    });
    if (!tour) res.status(404).send("not found");
    else {
        res
            .status(200)
            .json({
                status: 'SUCCESS',
                results: 1,
                data: {
                    tours: tour
                }
            });
    }
};


app.route('/api/v1/tours')
    .get(getall)
    .post(putone);

//                               NOTE ! 
//  +----------------------------------------------------------------+
//  |       Actually the router is also a kinf=d of middleware       | 
//  |          and if we used the above custom middleware            |
//  |                                                                |
//  |     +--------------------------------------------------+       |
//  |     |  app.use((req , res , next)=>{                   |       |
//  |     |  console.log("hello from middleware 1 :  ") ;    |       |
//  |     |  next() ;                                        |       |
//  |     |   });                                            |       |
//  |     +--------------------------------------------------+       |
//  |                                                                |
//  |       will not work for the above route  ! will give           |
//  |                          ERROR                                 |
//  +----------------------------------------------------------------+

app.route('/api/v1/tours/:id')
    .get(getone)
    .patch(update)
    .delete(del);