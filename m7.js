var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Home Page */

app.get("/", (req, res) => {

    res.send(`
    <html>
    <body>

    <h2>User Signup Form</h2>

    <form method="post" action="/register">

        Name :
        <input type="text" name="name"><br><br>

        Email :
        <input type="email" name="email"><br><br>

        Gender :
        <input type="radio" name="gender" value="Male">Male

        <input type="radio" name="gender" value="Female">Female

        <input type="radio" name="gender" value="Others">Others

        <br><br>

        <input type="submit" value="Register">

    </form>

    </body>
    </html>
    `);

});


/* Register Page */

app.post("/register", (req, res) => {

    var user = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender
    };

    // Cookie expires in 15 seconds
    res.cookie("registered", JSON.stringify(user), {
        maxAge: 15000
    });

    res.send(`
    <h1>Registration Successful</h1>

    <a href="/details">View Stored Details</a>
    `);

});


/* Details Page */

app.get("/details", (req, res) => {

    var data = req.cookies.registered;

    if (data) {

        var user = JSON.parse(data);

        res.send(`
        <h1>User Details</h1>

        <h3>Name : ${user.name}</h3>

        <h3>Email : ${user.email}</h3>

        <h3>Gender : ${user.gender}</h3>

        <br>

        <a href="/logout">Logout</a>
        `);

    }

    else {

        res.send(`
        <h1>Cookie Expired or No Data Found</h1>

        <a href="/">Go Home</a>
        `);

    }

});


/* Logout */

app.get("/logout", (req, res) => {

    res.clearCookie("registered");

    res.redirect("/");

});


app.listen(4000, () => {

    console.log("Server running on port 4000");

});