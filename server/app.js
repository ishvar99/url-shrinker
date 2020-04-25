const express=require('express');
let app=express();
const {connectDatabase}=require('./Database/db');
const PORT=5000;
//Connection to MongoDB
connectDatabase();
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({'message':'Welcome to URL Shrinker!'})
})
app.post('/shorten',(req,res)=>{
const {url}=req.body;
    console.log(url);
});
app.listen(PORT,()=>console.log('Server is running'));