//express-validator
const { validationResult } = require('express-validator');
exports.validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            errors: errors.array(),
        });
    }
    next();
};