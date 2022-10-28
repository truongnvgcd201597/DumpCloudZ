var express = require('express');
var router = express.Router();
var viewDetailProduct = require('../models/viewDetailProduct');
var deleteProduct = require('../models/deleteProduct');
var updateProduct = require('../models/updateProduct');

router.post('/update', async function (req, res, next) {
    let productID = req.body.id;
    let productName = req.body.name;
    let productQuantity = req.body.quantity;
    let productPrice = req.body.price;
    await updateProduct(productID, productName, productQuantity, productPrice);
    res.redirect('/users');
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

module.exports = router;