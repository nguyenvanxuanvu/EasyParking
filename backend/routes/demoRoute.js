var express = require('express');
var router = express.Router();
var {getTest, createTest} = require('../services/demoService');

// demo

router.get('/create', function(req, res, next) {
  let data = {
    name: 'Bãi đỗ hoa mai',
    street: '13 Hùng Vương'
  };
  createTest(data, res);
});

router.get('/', function(req, res, next) {
  getTest(res);
});



module.exports = router;
