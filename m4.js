var express=require("express")
var cookie=require("cookie-parser")
var app=express();
app.use(cookie())
app.get("/",(req,res)=>{
res.send(`<html>
<body>
<form method="get" action="/submit">
<input type="text" name="uname" placeholder="Enter ur name here"><br><br>
<input type="password" name="pwd" placeholder="Enter password here"><br><br>
<input type="submit" value="Submit">
</form>
</body>
</html>

`)

})
app.get("/submit",(req,res)=>{
var uname=req.query.uname
res.cookie("username",uname,{
maxAge:24*60*60*1000})
res.send(`welcome ${uname}`)

})
app.listen(4030);