var path = require('path')
var express=require('express')
var app=express()
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get("/data",(req,res)=>{
const uname=req.query.uname
const password=req.query.password
const remember=req.query.remember?"checked":"Not checked"
const subscribe=req.query.subscribe?"checked":"Not checked"

res.send(`
        <html>
        <head>
            <title>User Data</title>
        </head>
        <body>

            <h2>Submitted Data</h2>

            <p><b>Username:</b> ${uname}</p>
            <p><b>Password:</b> ${password}</p>
            <p><b>Remember:</b> ${remember}</p>
            <p><b>Subscribe:</b> ${subscribe}</p>

            <form action="/" method="GET">
                <button type="submit">Logout</button>
            </form>

        </body>
        </html>
    `);
});

// Start server
app.listen(3010, () => {
    console.log("Server running at http://localhost:3010");
});
