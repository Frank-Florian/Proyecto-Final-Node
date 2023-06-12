const { check } = require('express-validator');
const validateResult = require('../middlewares/validate');

const validateSignup = [
    check('email', 'Email error')
        .exists().withMessage('Email is required')
        .notEmpty().withMessage('Email cannot be empty')
        .isEmail().withMessage('Email must be a valid email')
        .isLength({ min: 5 , max: 50 }).withMessage('Email must be at least 5 characters'),

    check('username', 'Username error')
        .exists().withMessage('Username is required')
        .notEmpty().withMessage('Username cannot be empty')
        .isString().withMessage('Username must be a string')
        .isLength({ min: 3 , max: 30 }).withMessage('Username must be at least 2 characters'),

    check('password', 'Password error')
        .exists().withMessage('Password is required')
        .notEmpty().withMessage('Password cannot be empty')
        .isString().withMessage('Password must be a string')
        .isLength({ min: 5 , max: 10}).withMessage('Password must be at least 6 characters'),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateLogin = [ 
    check('email', 'Email error')
        .exists().withMessage('Email is required')
        .notEmpty().withMessage('Email cannot be empty')
        .isEmail().withMessage('Email must be a valid email')
        .isLength({ min: 5 , max: 50 }).withMessage('Email must be at least 5 characters'),

    check('password', 'Password error')
        .exists().withMessage('Password is required')
        .notEmpty().withMessage('Password cannot be empty')
        .isString().withMessage('Password must be a string')
        .isLength({ min: 5 , max: 10}).withMessage('Password must be at least 6 characters'),

        (req, res, next) => {
            validateResult(req, res, next);
        }
];



module.exports = {
    validateSignup,
    validateLogin
};


