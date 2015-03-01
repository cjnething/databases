var models = require('../models');
var bluebird = require('bluebird');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/JSON"
};

var statusCode = 200;


var collectData = function(request, callback){
    var data = "";
    request.on('data', function(chunk){
      data += chunk;
    });
    request.on('end', function(){
      callback(JSON.parse(data));
    });
  };
  var sendResponse = function(response, data, statusCode){
    statusCode = statusCode || 200;
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(data));
  };

var sendBackMsg = [
  // Useful for debugging
  {
    text: 'hello world',
    username: 'fred'
  }
];


module.exports = {
  messages: {
    get: function (request, response) {
      console.log("we made it");
      sendResponse(response, {results: sendBackMsg});
    }, // a function which handles a get request for all messages
    post: function (request, response) {
      console.log('Consoled In Messages POST!');
      collectData(request, function(message) {
        console.log("message");
        sendBackMsg.push(message);
        sendResponse(response, {username: 'fred'}, 201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Consoled In Users GET!');
      //res.writeHead(200, headers);
      //res.end(headers);
    },
    post: function (req, res) {
      console.log('Consoled In Users POST!');
      //res.writeHead(200, headers);
      //res.end(headers);
    }
  }
};

