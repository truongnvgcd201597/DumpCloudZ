var express = require('express');
var router = express.Router();
var viewAdminProduct = require('../models/viewAdminProduct');

router.post('/findShop', async function (req, res, next) {
    let name = req.body.shop;
    let listSelectShop = await selectBox();
    var viewProduct = await viewAdminProduct(name);
    res.render('admin', { Title: 'Admin', selectBox: listSelectShop, result: viewProduct })
});

module.exports = router;