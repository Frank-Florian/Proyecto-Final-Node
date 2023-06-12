const { Router } = require('express');
const { createCart, createProductInCart, updateProductsStatus } = require('../controllers/carts.controller');

const router = Router();

router.post('/cart', createCart);
router.post('/cart/:id/product', createProductInCart);
router.put('/cart/:id', updateProductsStatus);

module.exports = router;

