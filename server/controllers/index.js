var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200, "Hello");
      console.log('Consoled In Messages GET!');
      res.end("ended");
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('Consoled In Messages POST!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Consoled In Users GET!');
    },
    post: function (req, res) {
      console.log('Consoled In Users POST!');
    }
  }
};

