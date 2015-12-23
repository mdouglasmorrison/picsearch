var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require("http");

var Promise = require('bluebird');


//Import and instantiate Redis for SS caching
var redis = require('redis'),
    client;
if (process.env.REDISTOGO_URL) {
    var rtg = require('url').parse(process.env.REDISTOGO_URL);
    client = redis.createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(":")[1]);
} else {
    client = redis.createClient();
}

// Babel ES6/JSX Compiler
require('babel-core/register');

//React Stuff
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

//Import modules for async requests
var async = require('async');
var request = require('request');

//Import and instantiate Google API package for easier requests to Google Custom Search
var google = require('googleapis');
var customsearch = google.customsearch('v1');
var CX = '011380525212310874098:hfcl_canj_s',
    API_KEY = 'AIzaSyBKliSJPGcgS2snEIPcEmyETN6GxFiUDXw',
    TYPE = 'image';

//Instantiate & configure Express app.
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//Endpoint for Image Search by email
app.get('/api/search', function(req, res, next) {
    client.exists(req.query.email, function(err, reply) {
        if (reply === 1) {
            console.log('sendng cached val');
            client.get(req.query.email, function(err, reply) {
                res.json(reply);
            });
        } else {
            getPictureFromFullContact(req.query.email)
                .then(function (response) {
                    res.json(response);
                })
                .catch(function (error) {
                    getPictureFromGoogle(req.query.email)
                        .then(function (response){
                            res.json(response);
                        })
                        .catch(function(error){
                            if(error && error.status === 404){
                                res.send(404);
                            }else{
                                res.send(500);
                            }
                        });
                });
        }
    });
});

//React router
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


var getPictureFromFullContact = function(email) {
    var options = {
        url: 'https://api.fullcontact.com/v2/person.json?email=' + email + '&apiKey=5f16c7b83f528e2a',
        method: 'GET'
    };

    return new Promise(function(resolve, reject) {
        request(options, function (error, response, body) {
            var parseResponse = JSON.parse(body);
            if (error || response.statusCode !== 200 || !parseResponse.photos || parseResponse.photos.length === 0) {
                error = error || response.statusCode || 404;
                reject(error);
            } else {
                resolve(parseResponse.photos[0].url);
            }
        });
    });
};

var getPictureFromGoogle = function(email){
    return new Promise(function(resolve, reject) {
        customsearch.cse.list({ cx: CX, q: email, searchType: TYPE, auth: API_KEY }, function(error, response){
            if(response.items){
                resolve(response.items[0].link);
            }else if(response.spelling && response.spelling.correctedQuery) {
                customsearch.cse.list({
                    cx: CX,
                    q: response.spelling.correctedQuery,
                    searchType: TYPE,
                    auth: API_KEY
                }, function (error, response) {
                    if (error) {
                        if (!error.status) {
                            error.status = 500;
                        }
                        reject(error);
                    } else if (response.searchInformation.totalResults === '0') {
                        resolve(null);
                    } else {
                        resolve(response.items[0].link);
                    }
                });
            }else if(error) {
                if(!error.status){
                    error.status = 500;
                }
                reject(error);
            }else{
                resolve(null);
            }
        });
    });
};


//Connect to Redis
client.on('connect', function() {
    console.log('connected');
});

//Keep the App alive
setInterval(function() {
    http.get("http://rocky-basin-3780.herokuapp.com");
}, 300000); // every 5 minutes (300000)

//Start App
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});