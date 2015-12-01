var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Babel ES6/JSX Compiler
require('babel-core/register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var async = require('async');
var request = require('request');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/search', function(req, res, next) {
    getContact(req.query.email, function(data) {
        res.json(data);
    });
});

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

function getContact(email, callback) {
// Set the headers
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
// Configure the request
    var options = {
        url: 'https://api.fullcontact.com/v2/person.json?email=' + email + '&apiKey=5f16c7b83f528e2a',
        method: 'GET',
        headers: headers
    };

// Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(JSON.parse(body));
        }
        else
            console.log(error);
    });
}


app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});