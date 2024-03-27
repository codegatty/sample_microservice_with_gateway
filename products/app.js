console.log("hello this is products microservice")

const express = require('express');
const axios=require("axios")
const app = express();

app.use(express.json());

app.get('/products',async(req,res)=>{
    try{
    const userData=await axios.get("http://localhost:5001/users");
    console.log(userData);
    res.send("message form products service"+userData.data);
    }catch(err){
        console.log("unable to connec to user microservice")
        res.status(404).send("failed to fetch data form users")
    }
   
});

app.listen(5002,()=>{
    console.log("server is running on port 5002");
});