var path = require('path');
var express = require("express");
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// serve assets for static site
app.use(express.static(__dirname + '/build/'));

// handle every other route with index.html (React.js site)
app.use('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});