var express = require('express');
var { validationResult } = require('express-validator');
var router = express.Router();
router.post('/', (req, res, next) => {
    res.render('login', { title: 'Users' });
});

module.exports = router;
