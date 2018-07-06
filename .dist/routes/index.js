'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../controllers/index');

var _index2 = _interopRequireDefault(_index);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/api/breaking", function (req, res, next) {
  var breaking = 'https://content.guardianapis.com/search?q=breaking&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d';
  _axios2.default.get(breaking).catch(function (err) {
    return console.log(err);
  }).then(function (response) {
    return res.send(response.data);
  });
});

router.get("/api/ticker", function (req, res, next) {
  var url = "https://content.guardianapis.com/search?&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d";
  _axios2.default.get(url).catch(function (err) {
    return console.log(err);
  }).then(function (response) {
    return res.send(response.data);
  });
});

router.get("/api/upper/:tagId", function (req, res) {
  var cat = 'https://content.guardianapis.com/search?q=' + req.params.tagId + '&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d';
  _axios2.default.get(cat).catch(function (err) {
    return console.log(err);
  }).then(function (response) {
    return res.send(response.data);
  });
});

router.get("/api/lower/card/:cat", function (req, res) {
  var ucat = 'https://newsapi.org/v2/everything?q=' + req.params.cat + ',relevancy&language=en&apiKey=09ef819989214e788bd5c136781c8b90';
  _axios2.default.get(ucat).catch(function (err) {
    return console.log(err);
  }).then(function (response) {
    return res.send(response.data);
  });
});

// Always return the main index.html, so react-router render the route in the client
router.get("/", function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '..', 'public', 'index.html'));
  res.end();
});

module.exports = router;