console.log("hello this is users microservice")

const express = require('express');
const app = express();

app.use(express.json());


app.get('/users',(req,res)=>{
    res.send("message form users service");
});
app.listen(5001,()=>{
    console.log("server is running on port 5001");
});