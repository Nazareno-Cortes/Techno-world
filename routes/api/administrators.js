var express = require('express');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = require('../../data/administrators');
var router = express.Router();

var saveData = function(data) {
  var filePath = path.join(__dirname, '../../data/administrators.json')
  fs.writeFile(filePath, JSON.stringify(data))
}

router.get('/', function (req, res) {
  res.json(data.list);
});

router.post('/', function(req, res) {
  var newAdministrator = req.body;
  data.list.push(newAdministrator);
  saveData(data);
  res.json(data.list);
});

module.exports = router;
