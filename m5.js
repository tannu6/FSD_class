var path=require('path');
var express=require('express')
var cookie=require('cookie-parser')
var app=express();
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,'cal.html'))
})
app.use(express.urlencoded({extended:true}));
app.get("/calc",(req,res)=>{
var n1=parseInt(req.query.num1);
var n2=parseInt(req.query.num2);
if((n1>0)&&(n2>0)){
if(req.query.operation=="add"){
a=n1+n2;
res.write("<h1>Addition is:</h1>"+a)
}
else if(req.query.operation=="sub"){
s=n1-n2;
res.write("<h1>subtraction is:</h1>"+s)
}
else if(req.query.operation=="mul"){
m=n1*n2;
res.write("<h1>multiplication is</h1>:"+m)
}
else if(req.query.operation=="div"){
d=n1+n2;
res.write("<h1>division is:</h1>"+d)
}
else{
res.write("Please select atleast one formula")
}



}
else{
res.write("please number must be positive")
res.send()
}
})
app.listen(4000);