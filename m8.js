var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

/* Home Page with Form */

app.get("/", (req, res) => {

    res.send(`
    <html>
    <body>

    <h2>User Feedback Form</h2>

    <form method="get" action="/submitfeedback">

        Name :
        <input type="text" name="name"><br><br>

        Email :
        <input type="email" name="email"><br><br>

        Message :
        <textarea name="message"></textarea><br><br>

        Rating :

        <input type="radio" name="rating" value="Bad">Bad

        <input type="radio" name="rating" value="Average">Average

        <input type="radio" name="rating" value="Good">Good

        <input type="radio" name="rating" value="Very Good">Very Good

        <input type="radio" name="rating" value="Excellent">Excellent

        <br><br>

        <input type="submit" value="Submit Feedback">

    </form>

    </body>
    </html>
    `);

});


/* Store Feedback in Cookie */

app.get("/submitfeedback", (req, res) => {

    var feedback = {
        name: req.query.name,
        email: req.query.email,
        message: req.query.message,
        rating: req.query.rating
    };

    // Cookie expires in 10 seconds
    res.cookie("feedback", JSON.stringify(feedback), {
        maxAge: 10000
    });

    res.send(`
    <h1>Feedback Submitted Successfully</h1>

    <a href="/details">View Feedback Details</a>
    `);

});


/* Display Feedback Details */

app.get("/details", (req, res) => {

    var data = req.cookies.feedback;

    if (data) {

        var feedback = JSON.parse(data);

        res.send(`
        <h1>Feedback Details</h1>

        <h3>Name : ${feedback.name}</h3>

        <h3>Email : ${feedback.email}</h3>

        <h3>Message : ${feedback.message}</h3>

        <h3>Rating : ${feedback.rating}</h3>

        <br>

        <a href="/logout">Logout</a>
        `);

    }

    else {

        res.send(`
        <h1>Cookie Expired or No Feedback Found</h1>

        <a href="/">Go Home</a>
        `);

    }

});


/* Logout */

app.get("/logout", (req, res) => {

    res.clearCookie("feedback");

    res.redirect("/");

});


app.listen(4000, () => {

    console.log("Server running on port 4000");

});