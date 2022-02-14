var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});
//http and no https

/* GET users listing. */
router.get('/', function (req, res, next) {

  client.get('/users', function (err, request, response, obj) {

    assert.ifError(err);

    res.json(obj);
  });

});

module.exports = router;
