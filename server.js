var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

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
            getContact(req.query.email, function(error, reply) {
                if(error){
                    if(error === 404){
                        res.send(404, 'You seem to be searching for someone who doesnt exist. Maybe try another email?');
                    }else{
                        res.send(500, 'Oh No! There was an error on the server. Please try again later.');
                    }
                }else{
                    client.set(req.query.email, reply);
                    res.json(reply);
                }
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


//Functions for API consumption. Tries FullContact first. If no results, tries Google Images. If no results, does a
//Google Image search by suggested spelling.

//FullContact
function getContact(email, callback) {
    var options = {
        url: 'https://api.fullcontact.com/v2/person.json?email=' + email + '&apiKey=5f16c7b83f528e2a',
        method: 'GET'
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parseResponse = JSON.parse(body);
            if(parseResponse.photos && parseResponse.photos.length > 0){
                callback(false, parseResponse.photos[0].url);
            }else{
                fallbackRequest(email, callback);
            }
        }
        else{
            fallbackRequest(email, callback);
        }
    });
}

//Fallback to Google Images
function fallbackRequest(email, callback){
    customsearch.cse.list({ cx: CX, q: email, searchType: TYPE, auth: API_KEY }, function(error, response){
        if (!error) {
            if (!response.items && response.spelling && response.spelling.correctedQuery) {
                finalFallback(response.spelling.correctedQuery, callback)
            }else if(!response.items) {
                callback(404, {});
            }else {
                callback(false, response.items[0].link);
            }
        }else{
            callback(500, {});
        }
    });
}

//Fallback to Google Images by suggested spelling
function finalFallback(query, callback){
    customsearch.cse.list({ cx: CX, q: query, searchType: TYPE, auth: API_KEY }, function(error, response){
        if(!error){
            if(response.items){
                callback(false, response.items[0].link);
            }else{
                callback(404, {});
            }
        }else{
            callback(500, {});
        }
    });
}


//Connect to Redis
client.on('connect', function() {
    console.log('connected');
});


//Start App
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});