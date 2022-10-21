const express = require('express');
const router = express.Router();

// Config controller routes
router.get('/', (req, res, next) => {
    res.render('admin', { title: 'Admin' }
    )
});

// Export router
module.exports = router;