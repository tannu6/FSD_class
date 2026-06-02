var express = require("express");
var path = require("path");
var es = require("express-session");

var app = express();

app.use(es({
  resave: false,
  saveUninitialized: false,
  secret: "Tannu1"
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index1.html"));
});

app.get("/savesessionpage", (req, res) => {
  req.session.uname = req.query.uname;
  res.redirect("/fetchsession");
});

app.get("/fetchsession", (req, res) => {
  res.send(`
    <h1>Welcome ${req.session.uname}</h1>
    <a href='/logout'>Logout</a>
  `);
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(4050);