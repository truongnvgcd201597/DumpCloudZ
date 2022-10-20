const { check } = require('express-validator');
const db = require('../db');

const checkpassword = check('password').isLength({ min: 6, max: 15 }).withMessage('Password must be between 6 and 15 characters');
const email = check('email').isEmail().withMessage('Email is not valid');

const emailExists = check('email').custom(async (value) => {
    const { rows } = await db.query('SELECT * FROM USERS WHERE email = $1', [value]);
    if (rows.length > 0) {
        return Promise.reject('Email already exists');
    }
    return true;
});

const emailExistsLogin = check('email').custom(async (value) => {
    const { rows } = await db.query('SELECT * FROM USERS WHERE email = $1', [value]);
    if (rows.length === 0) {
        return Promise.reject('Email does not exist');
    }
    return true;
});

const passwordExists = check('password').custom(async (value, { req }) => {
    const { rows } = await db.query('SELECT * FROM USERS WHERE email = $1', [req.body.email]);
    if (rows.length === 0) {
        return Promise.reject('Password does not exist');
    }
    return true;
});

module.exports = {
    registerValidation: [checkpassword, email, emailExists, emailExistsLogin, passwordExists],
};