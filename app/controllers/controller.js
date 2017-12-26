'use strict';

let NerdController = require('../models/nerd.js')

exports.get = function(req, res) {
    // use mongoose to get all nerds in the database
    Nerd.find(function(err, nerds) {

        // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(nerds); // return all nerds in JSON format
    });
}

exports.post = function(req, res) {
  var nerd = new NerdController(req.body);

  if(!req.body.title){
    res.status(400)
    res.send('Title is required');
  }
  else {
    nerd.save(function(err){
      if(err) res.status(400).send(err);
      else res.status(201).send(book);
    });
  }
}

exports.put = function(req, res) {}

exports.delete = function(req, res) {}

exports.default = function(req, res) {
    res.sendfile('public/index.html');
}
