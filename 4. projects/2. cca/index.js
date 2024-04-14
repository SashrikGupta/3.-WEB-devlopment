const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors') ; 



app.use(bodyParser.json());
app.use(cors())
var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = { OS: "windows" };
//else
var envData = { OS: "linux" };

const py_route = express.Router();



const pyposthandel = (req, res) => {
    const code = req.body.code;
    const input = req.body.input ;
    compiler.compilePythonWithInput( envData , code , input ,  function(data){
        res.send(data);   
        deleteTempFiles();     
    });


}

//--------------------------------------------------------------
function deleteTempFiles() {
    const directory = './temp'; 
    fs.readdir(directory, (err, files) => {
        if (err) console.log(err);

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) console.log(err);
            });
        }
    });
}
//-------------------------------------------------------------



py_route.post('/', pyposthandel); 


app.use("/py_router", py_route);

app.listen(8000, () => {
    console.log("server has been started ");
});
