var express=require("express");
var app=express();
var path=require('path')
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,'country.html'))})
app.get('/submit',(req,res)=>{
var name=req.query.uname
var country=req.query.country
res.send("you are:"+name+"from "+country)
})
app.listen(4200);
