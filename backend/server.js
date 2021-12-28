//nodejs
//import the node modules
//@express   @cors   @mongodb
//require() function used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest api's


//enable the cors policy
app.use(cors());


//set the "json" as mime type
app.use(express.json());


//create the client object
//client object used to connect to the database
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the client object


//rest api
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/ngmrngbatch?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngmrngbatch");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
});


//assign the port number
app.listen(8080,()=>{
    console.log("node server running on port number 8080");
});