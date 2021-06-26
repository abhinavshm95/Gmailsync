const express = require('express');
const cors = require('cors');
const routes = require('./routes/v1');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());
// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
