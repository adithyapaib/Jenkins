var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "message": "Hello world v2" }');
});

app.get('/ping', function (req, res) {
    res.send('{ "message": "pong" }');
});
app.get('/test', function (req, res) {
    res.send('{ "message": "Test!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;