const fs = require('fs');

const tours_data = JSON.parse(
    fs.readFileSync(`./API MATERIALS/dev-data/data/tours-simple.json`, "utf-8")
);


// creation of a middleware 
exports.checkTour = (req , res  , next )=>{

    const data = req.body ; 
    if("name" in data && "price" in data) { next() ; }
    else 
    {
        res
           .status(400)
           .json({
            status : "UNSUCCESSFUL" , 
            data : null 
           })
    }
}

exports.getall = (req, res) => {
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
exports.putone = (req, res) => {
   const newid = tours_data[tours_data.length - 1].id + 1;
   const newtour = Object.assign({ id: newid }, req.body);
   tours_data.push(newtour);
   fs.writeFile("./API MATERIALS/dev-data/data/tours-simple.json", JSON.stringify(tours_data), (err, data) => {
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
exports.update = (req, res) => {
   // update here
   res.status(200).json({
       status: 'SUCCESS',
       data: {
           tour: tours_data
       }
   });
};
exports.del = (req, res) => {
   // your delete logic
   res
       .status(204)
       .json({
           status: 'SUCCESS',
           data: null
       });
};
exports.getone = (req, res) => {
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


// this is our middle ware 
exports.checkID = (req , res , next , val )=>{
    //console.log("ye chala hai ")
    const requested_id = val * 1;
    console.log(requested_id);
    const tour = tours_data.find((element) => {
        if (element.id === requested_id) return element;
    });
    if (!tour) res.status(404).send("not found");
    else next() ; 
}


