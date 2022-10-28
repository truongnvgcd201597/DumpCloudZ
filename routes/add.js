var express = require('express');
var router = express.Router();
var createProduct = require('../models/addProduct');
let session;

router.post('/add', async function (req, res, next) {
    let productName = req.body.name;
    let productQuantity = req.body.quantity;
    let productPrice = req.body.price;
    let shopID = req.session.user.shop;
    createProduct(productName, productPrice, productQuantity, shopID);
    res.redirect('/users');
});
module.exports = router;