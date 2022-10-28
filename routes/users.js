var express = require('express');
const { routes } = require('../app');
var router = express.Router();
var viewProduct = require('../models/viewProduct');

router.get('/users', async function (req, res, next) {
  let shopID = req.session.user.shop;
  let username = req.session.user.username;
  let productString = await viewProduct(shopID);
  if (username) {
    res.render('home', { name: username, products: productString });
  } else {
    res.render('login', { notice: 'welcome' });
  }
});

module.exports = router;