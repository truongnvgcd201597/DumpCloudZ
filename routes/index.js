var express = require('express');
var router = express.Router();
var selectBox = require('../models/selectBox');
var viewAdminProduct = require('../models/viewAdminProduct');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('', function (req, res) {
  res.render('login', { notice: 'welcome' });
});

router.post('/findShop', async function (req, res, next) {
  let name = req.body.shop;
  let listSelectShop = await selectBox();
  var viewProduct = await viewAdminProduct(name);
  res.render('admin', { Title: 'Admin', selectBox: listSelectShop, result: viewProduct })
});

module.exports = router;