import express from 'express'

const app = express();

app.get('/',(req,res)=>{
res.send("You are in the node project");
});

app.listen(3000,()=>{console.log("server is running on port 3000");});

