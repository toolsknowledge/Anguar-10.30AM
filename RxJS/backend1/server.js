const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/demo/:num",(req,res)=>{
    const data = req.params.num; 
    if(Number(data)>10){
        throw new Error("More than 10")
    }else{
        res.json({
            data : Number(data)
        })
    }
});

app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});