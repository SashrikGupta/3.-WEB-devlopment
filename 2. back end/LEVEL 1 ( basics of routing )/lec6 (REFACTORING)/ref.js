const express = require('express');
const fs = require('fs');
const app = express();

const port = 8000;
app.listen(8000, (req, res) => {
    console.log("server has been started at port: 8000");
});

app.use(express.json());

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

//----------------function repository--------------

// app.get('/api/v1/tours', getall );
// app.post('/api/v1/tours' , putone ); 
// app.get('/api/v1/tours/:id', getone );
// app.patch('/api/v1/tours/:id' , update) ; 
// app.delete('/api/v1/tours/:id' , del) ;
//     |
//     |      now lets say we want to cvhange something 
//     |      that needs to be changed in all to achieve that 
//     |      we use app.route 
//     |

app.route('/api/v1/tours')
    .get(getall)
    .post(putone);

app.route('/api/v1/tours/:id')
    .get(getone)
    .patch(update)
    .delete(del);
