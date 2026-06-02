64q][
// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should 
// jump on "check" page using "POST" method. If username is "admin" 
// , then jump on next middleware to print "welcome… admin" , if 
// username is not "admin" , then stay on same middleware to print 
// "warning msg" in red color.
var express = require('express');
var app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname,{index:'l1.html'}));
app.post('/check',(req,res,next)=>{
    if(req.body.uname=="admin"){
        next();
    }
    else{
        res.send(`<h1 style="color:red">wrong credentialse</h1>`)
    }
})
app.post("/check",(req,res)=>{
    res.send("<h1>welcome..."+req.body.uname+"</h1>")
    
})
app.listen(3001);