// app.js

const express = require('express');
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Route to display form
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>User Form</title>
        </head>
        <body>
            <h2>User Registration Form</h2>

            <form method="POST" action="/submit">
                <label>Name:</label>
                <input type="text" name="name"><br><br>

                <label>Email:</label>
                <input type="email" name="email"><br><br>

                <input type="submit" value="Submit">
            </form>
        </body>
        </html>
    `);
});

// Route to handle POST request
app.post('/submit', (req, res) => {

    // Get submitted data
    const formData = req.body;

    // Log data to console
    console.log("Submitted Data:");
    console.log(formData);

    res.send("<h2>Form Submitted Successfully</h2>");
});

// Server
app.listen(3040, () => {
    console.log("Server running at http://localhost:3030");
});