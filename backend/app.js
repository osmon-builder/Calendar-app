var mongoose = require('mongoose')
var express = require ('express')


var app = express();

var meeting_routes = require('./routes/meeting')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', meeting_routes);

module.exports = app;