console.log("hello this is orders microservice...")

const express = require('express');
const app = express();

app.use(express.json());

app.get('/orders',(req,res)=>{
    res.send("message form order service");
});

app.listen(5003,()=>{
    console.log("server is running on port 5003");
});