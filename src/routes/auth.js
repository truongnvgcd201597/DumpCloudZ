const { Router } = require('express');
const { getUsers } = require('../controllers/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware')
const { registerValidation } = require('../validators/auth')
const { register } = require('../controllers/auth');
const router = Router();

router.get('/get-users', getUsers);
router.post('/register', validationMiddleware, registerValidation, register);
module.exports = router;

// ../middlewares/validations-middleware