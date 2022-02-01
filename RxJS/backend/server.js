const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const jwt = require("jwt-simple");


const app = express();

app.use(cors());

app.use(express.json());

const ashokIT = mongodb.MongoClient;

let g_token = "";

app.post("/login",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("miniproject");
            db.collection("login_details").find({"email":req.body.email,"password":req.body.password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        const token = jwt.encode({"email":req.body.email,"password":req.body.password},"admin123");
                        g_token = token;
                        res.send({"login":"success","token":token})
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            })
        }
    })
});


app.get("/products",(req,res)=>{
    let allHeaders = req.headers;
    if(allHeaders.token == g_token){
        ashokIT.connect("mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("miniproject");
                db.collection("products").find().toArray((err,array)=>{
                    if(err) throw err;
                    else{
                        res.send(array);
                    }
                })
            }
        });
    }else{
        res.send({"message":"unauthorized user"});
    }
});





app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});



