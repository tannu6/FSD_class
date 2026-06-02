var express = require('express');
var path = require('path');

var app = express();

app.use(express.urlencoded({ extended: true }));

/* Home Page */

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, 'discount.html'));

});


/* Discount Page */

app.post("/discount", (req, res) => {

    var price = parseInt(req.body.price);
    var discount = parseInt(req.body.discount);
    var offer = req.body.offer;

    // Validation for price and discount
    if ((price <= 0) || (discount <= 0)) {

        res.send("<h1>Enter valid price and discount</h1>");

    }

    // Validation for dropdown
    else if (offer == "") {

        res.send("<h1>Please select an offer type</h1>");

    }

    else {

        var finalprice = price - (price * discount / 100);

        res.send(`
        <h1>Offer Selected : ${offer}</h1>
        <h2>Final Price : ${finalprice}</h2>
        `);

    }

});

app.listen(4000, () => {

    console.log("Server running on port 4000");

});