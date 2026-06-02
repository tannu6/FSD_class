var express=require('express');
var app=express();
//app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
res.send(`<html>
<body>
<form  method="get" action="/submit">
<textarea rows="10" cols="20" name="message">Hi.Hello.how are u?
</textarea>
<input type="submit" value="submit">
</form>
</body>
</html>

`)
})
app.get("/submit",(req,res)=>{
const message=req.query.message
t1=message.split(".")
res.write("<html><body>")
for(i in t1){
res.write(t1[i]+"<br>")}

res.write("</body></html>")
res.send()})
app.listen(5

000);

