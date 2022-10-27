var express = require('express');
const { routes } = require('../app');
var router = express.Router();
var selectBox = require('../models/selectBox');
var viewAdminProduct = require('../models/viewAdminProduct');

router.get('/admin', async function (req, res, next) {
    let listSelectShop = await selectBox();
    let viewProduct = await viewAdminProduct('all');
    let username = req.session.user.username;
    if (username) {
        res.render('admin', { selectBox: listSelectShop, result: viewProduct })
    } else {
        res.render('/login');
    }
});

module.exports = router;