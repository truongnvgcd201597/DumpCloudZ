var express = require('express');
var router = express.Router();
var selectBox = require('../models/selectBox');
var viewAdminProduct = require('../models/viewAdminProduct');
var authentication = require('../models/authenticate');
var viewDetailProduct = require('../models/viewDetailProduct');
var deleteProduct = require('../models/deleteProduct');
var updateProduct = require('../models/updateProduct');
var createProduct = require('../models/addProduct');
let session;
let sessionSign;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('', function (req, res) {
  res.render('login', { notice: 'welcome' });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


router.post('/login', async (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  sessionSign = req.session;
  let [authenticated, idshop, role] = await authentication(username, password);
  if (authenticated == true && role == 'shop') {
      sessionSign.user = {
          username: username,
          shop: idshop,
      };
      res.redirect('/users');
  } else if (authenticated == true && role == 'director') {
      sessionSign.user = {
          username: username,
          shop: idshop,
      };
      res.redirect('/admin');
  } else {
      res.render('login', { notice: "wrong username or password" });
  }
});

router.post('/findShop', async function (req, res, next) {
  let name = req.body.shop;
  let listSelectShop = await selectBox();
  var viewProduct = await viewAdminProduct(name);
  res.render('admin', { Title: 'Admin', selectBox: listSelectShop, result: viewProduct })
});

router.post('/button', async function (req, res, next) {
  var action = req.body.button;
  if (action == "update") {
      var productID = req.body.id;
      var productDetail = await viewDetailProduct(productID);
      let productDetailStrs = `
    <form action="update" method="POST">
  <label for="id">ID:</label>
  <input type="text" id="fname" name="id" value="${productDetail.id}" readonly><br><br>
  <label for="name">Name product:</label>
  <input type="text" id="lname" name="name" value="${productDetail.name}"><br><br>
  <label for="price">Price:</label>
  <input type="text" id="fname" name="price" value="${productDetail.price}"><br><br>
  <label for="quantity">Quantity:</label>
  <input type="text" id="lname" name="quantity" value="${productDetail.quantity}"><br><br>
  <input type="hidden" name="shop" value="${productDetail.shop}">
  <button type="submit"> Save </button>
  <a href="http://localhost:3000/users"><input type="button" value="exit"></a>
</form>
    `;
      res.render('updateProduct', { product_detail: productDetailStrs });
  } else {
      var productID = req.body.id;
      deleteProduct(productID);
      res.redirect('/users');
  }

});

router.post('/update', async function (req, res, next) {
  let productID = req.body.id;
  let productName = req.body.name;
  let productQuantity = req.body.quantity;
  let productPrice = req.body.price;
  await updateProduct(productID, productName, productQuantity, productPrice);
  res.redirect('/users');
});

router.get('exit', (req, res) => {
  res.redirect('users');
});

router.post('/add', async function (req, res, next) {
  let productName = req.body.name;
  let productQuantity = req.body.quantity;
  let productPrice = req.body.price;
  let shopID = req.session.user.shop;
  console.log(req.session.user.shop);
  createProduct(productName, productPrice, productQuantity, shopID);
  res.redirect('/users');
});
module.exports = router;
