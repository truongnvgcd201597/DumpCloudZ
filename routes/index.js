var express = require('express');
var router = express.Router();
var authentication = require('../models/authenticate');
var viewProduct = require('../models/viewProduct');
var selectBox = require('../models/selectBox');
var viewAdminProduct = require('../models/viewAdminProduct');
var viewDetailProduct = require('../models/viewDetailProduct');
var deleteProduct = require('../models/deleteProduct');
var updateProduct = require('../models/updateProduct');
var createProduct = require('../models/addProduct');
let sessionData;;

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