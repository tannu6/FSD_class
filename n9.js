const express = require('express');

const app = express();

let msg = "";

// Home Page
app.get('/', (req, res) => {

    res.send(`
        <html>
        <body>

            <h2>User Form</h2>

            <form action="/login" method="GET">

                Username:
                <input type="text" name="username">
                <br><br>

                Password:
                <input type="password" name="password">
                <br><br>

                Message:
                <br>
                <textarea name="message" rows="5" cols="30"></textarea>

                <br><br>

                <button type="submit">Submit</button>

            </form>

        </body>
        </html>
    `);

});

// /login Route
app.get('/login',

    // Middleware 1
    (req, res, next) => {

        msg = req.query.message;

        console.log("Middleware Executed");

        next();
    },

    // Middleware 2
    (req, res) => {

        const username = req.query.username;
        const password = req.query.password;
        const message = req.query.message;

        res.send(`
            <html>
            <body>

                <h2>Submitted Details</h2>

                <p><b>Username:</b> ${username}</p>
                <p><b>Password:</b> ${password}</p>
   Q             <p><b>Message:</b> ${message}</p>

                <a href="/message">Show Vowel</a>

            </body>
            </html>
        `);
    }
);

// /message Route
app.get('/message', (req, res) => {

    let count = 0;

    for (let ch of msg.toLowerCase()) {

        if ('aeiou'.includes(ch)) {
            count++;
        }
    }

    res.send(`
        <html>
        <body>

            <h2>Vowel Count</h2>

            <p>Total Vowels in Message: ${count}</p>

        </body>
        </html>
    `);

});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});