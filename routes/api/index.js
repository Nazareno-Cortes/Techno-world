var express = require('express');
var cors = require('cors');
var products = require('./products');
var utils = require('./utils');
var administrators = require('./administrators');
var router = express.Router();

router.use(cors());

router.use('/products', products);
router.use('/utils', utils);
router.use('/administrators', administrators);

module.exports = router;
