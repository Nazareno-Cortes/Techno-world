var express = require('express');
var products = require('./products');
var users = require('./users');
var utils = require('./utils');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('siempre se ejecuta...')
  next();
});

router.use('/products', products);
router.use('/utils', utils);
router.use('/users', users);

module.exports = router;
