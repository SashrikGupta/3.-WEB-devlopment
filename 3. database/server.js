
// consider the belo as boiler template for 
// starting any application connected to mongoose
// and which gets handeled at 
// express routers 

const mongoose = require('mongoose') ; 
const dotenv = require('dotenv') ; 
const app = require('./REFACTORING_MVC_MODEL/app') ; 
dotenv.config({path : './config.env'}) ; 
const PORT = process.env.PORT || 4000 ;
const db = process.env.DATABASE 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sashrikgupta:s1cmqKMdBjJxOS3D@cluster0.sif58uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;



//=========================================================================================================







// connecting to our data basre servers 
mongoose
    .connect(uri)
    .then(console.log("connected"))
    .catch((err)=>console.log("mongo error"))

//--------------------------------------------------------------------










//=========================================================================================================
//--------- NOTES LEC 2 ------------------



















//------------------------------------------------------------------------
// note one thing that you can also perform here is that 
// you can use connection object passed be d 
// .then((con)=>{console.log(con.connections) ; })
// thi swill give you all informatiuons about your 
// data base 

app.listen(PORT, (req, res) => {
    console.log("server has been started at port: " + PORT );
});