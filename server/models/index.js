var db = require('../db');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/JSON"
};


module.exports = {
  messages: {
    get: function (req, res) {
      console.log("getmodels");
      //res.writeHead(200, headers);
      //res.end(headers);
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log("post models");
      //res.writeHead(200, headers);
      //res.end(headers);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log("get users models");
      //res.writeHead(200, headers);
      //res.end(headers);
    },
    post: function (req, res) {
      console.log("post users models");
      //res.writeHead(200, headers);
      //res.end(headers);
    }
  }
};

