/**
 * Created by migdonio1 on 12/4/16.
 */
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');

/*
 * Mongosee
 */

var Word;

mongoose.connect("mongodb://localhost:27017/shared-japanese");

var db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Database shared-japanese connected...");
    initModels();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var port = process.env.PORT || 3001;

    var apiRouter = require('./routes/api');

    app.use('/api/v1/', apiRouter);

    app.listen(port, function() {
        console.log("SharedJapanese Web server started on port " + port + "...");
    });
});

function initModels() {
    require("./models/Word.model");

    Word = mongoose.model('Word');
}