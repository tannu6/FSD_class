var express=require('express')
var app=express()
var es=require('express-session');
app.use(es({
resave:true,
saveUninitialized:true,
secret:"T123"

}));
app.get("/",(req,res)=>{
if(req.session.page_views){
req.session.page_views++;
res.send(`<h1>u have visited page${req.session.page_views}</h1>`)

}
   else {
        req.session.page_views = 1;

        res.send("<h1>Welcome to the page for first time</h1>");
    }
})
app.listen(3020);