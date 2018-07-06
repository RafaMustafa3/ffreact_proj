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

router.get('/', _index2.default);

router.get("/api/breaking", function (req, res, next) {
  var breaking = 'https://content.guardianapis.com/search?q=breaking&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d';
  // ({ data } = await axios.get(breaking).catch(err => console.log(err)));
  _axios2.default.get(breaking).then(function (response) {
    console.log("response is back +++++++++++++++++++");
    req.news = response.data;
    next();
  });
  // console.log("In: api/breaking", "Response: "+ response);
}, function (req, res) {
  console.log("This is the next:", req.news);
  res.sendFile(_path2.default.resolve(__dirname, '../..', 'public', 'index.html'));
});

// Always return the main index.html, so react-router render the route in the client
// router.get("*", (req, res) => {
//   console.log("****************************************************");
//   console.log("Response:",response.response.results);
//
//   res.sendFile(path.resolve(__dirname, '../..', 'views', 'index.html'));
//   // res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
// });


module.exports = router;