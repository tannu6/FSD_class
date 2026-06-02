var express=require("express");
var app=express();
app.get("/home",(req,res)=>{
res.send("<h1>welcome to my home page </h1>")
})
app.get("/about",(req,res)=>{
res.send("<h1 style='color:blue'>welcome to my home page </h1>")
})
app.get("/contact",(req,res)=>{
res.send("<h1 style='color:pink'>welcome to my home page </h1>")
})
app.get("/temp",(req,res)=>{
res.send("<h1 style='color:green'>welcome to my home page </h1>")
})
app.listen(4000);