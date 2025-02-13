const express=require('express');
let app=express();
const {connectDatabase}=require('./Database/db');
const shortId=require('shortid');
const urlRegex = require('url-regex');
const PORT=5000;
//Connection to MongoDB
connectDatabase();
const Url=require('./models/url')
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({'message':'Welcome to URL Shrinker!'})
})
app.post('/shorten',(req,res)=>{
const {url}=req.body;
Url.findOne({fullUrl:url}).then((result)=>{
        if(!result){
            if(!urlRegex({exact: true,strict:false}).test(url)){
                res.json({error:'Invalid URL'})
            }
            else{
                Url.create({
                    'fullUrl':url,
                    'shortUrl':shortId.generate()
                }).then((url)=>{
                    res.json({message:url})
                }).catch((err)=>{
                    res.json({error:'Error'})
                })
            }
        }
        else{
            res.json({message:result})
        }
})
});

app.get('/:shortId',(req,res)=>{
    console.log(req.params.shortId)
    Url.findOne({shortUrl:req.params.shortId})
    .then((url)=>{
        res.redirect(url.fullUrl);
    })
    .catch((err)=>console.log(err));
})
app.listen(PORT,()=>console.log('Server is running'));