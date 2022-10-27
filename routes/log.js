var express = require('express');
var router = express.Router();
var authentication = require('../models/authenticate');
router.post('', function (req, res) {
    res.render('login', { notice: 'welcome' });
});
router.post('/login', async (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    sessionData = req.session;
    let [authenticated, idshop, role] = await authentication(username, password);
    if (authenticated == true && role == 'shop') {
        sessionData.user = {
            username: username,
            shop: idshop,
        };
        res.redirect('/users');
    } else if (authenticated == true && role == 'admin') {
        sessionData.user = {
            username: username,
            shop: idshop,
        };
        res.redirect('/admin');
    } else {
        res.render('login', { notice: "wrong username or password" });
    }
});
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

router.get('exit', (req, res) => {
    res.redirect('users');
});
module.exports = router;