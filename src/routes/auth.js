const { Router } = require('express');
const router = Router();

router.get('/register', (req, res) => {
    res.send('Register Route!');
});

module.exports = router;
