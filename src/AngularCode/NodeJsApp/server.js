var express = require('express');
var app = express();

// CORS
// or try this later, https://www.npmjs.org/package/cors
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/products', function(req, res) {
    var ret = [
        {
            "id": 0,
            "title": "Paint pots",
            "description": "Pots full of paint",
            "price": 3.95
        },
        {
            "id": 1,
            "title": "Polka dots",
            "description": "Dots with that polka groove",
            "price": 12.95
        },
        {
            "id": 2,
            "title": "Pebbles",
            "description": "Just little rocks, really",
            "price": 6.95
        }
    ];
    console.log('products request..');
    res.json(ret);
});

var server = app.listen(1337, function() {
    console.log('Listening on port %d', server.address().port);
});