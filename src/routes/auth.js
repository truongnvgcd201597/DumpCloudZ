const { Router } = require('express');
const { getUsers } = require('../controller/auth');
const router = Router();

router.get('/get-users', getUsers);
module.exports = router;
