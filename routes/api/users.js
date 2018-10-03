var express = require('express');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = require('../../data/users');
var router = express.Router();

var saveData = function(data) {
  var filePath = path.join(__dirname, '../../data/users.json')
  fs.writeFile(filePath, JSON.stringify(data))
}

router.get('/', function (req, res) {
  res.json(data.list);
});

router.get('/:id', function (req, res) {
  var id_User = req.params.id;
  var user = _.find(data.list, function(item) {
    return item.id.toString() === id_User.toString();
  })
  if(user) res.json(user);
  else res.status(404).send('<h1>Not Found</h1>');
});

router.get('/search/:name', function(req, res) {
  var name_User = req.params.name;
  var users = _.filter(data.list, function(item) {
    return item.name.indexOf(name_User) >= 0;
  })
  res.json(users);
});

router.post('/', function(req, res) {
  var newUser= req.body;
  data.list.push(newUser);
  saveData(data);
  res.json(data.list);
});

module.exports = router;
