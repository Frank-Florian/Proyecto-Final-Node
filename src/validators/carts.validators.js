const { check } = require('express-validator');
const validateResult = require('../middlewares/validate');

const validateCart = [
    check('product_id', 'Product id error')
        .exists().withMessage('Product id is required')
        .notEmpty().withMessage('Product id cannot be empty')
        .isInt().withMessage('Product id must be an integer'),

    check('quantity', 'Quantity error')
        .exists().withMessage('Quantity is required')
        .notEmpty().withMessage('Quantity cannot be empty')
        .isInt().withMessage('Quantity must be an integer'),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    validateCart
};