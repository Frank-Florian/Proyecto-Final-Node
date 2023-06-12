const { Router } = require('express');
const { createOrder, updateOrderStatus, createProductsInOrder } = require('../controllers/orders.controller');
const auth = require('../middlewares/auth.middleware');

const router = Router();

router.post('/orders', auth, createOrder);
router.post('/order/:id/product',  createProductsInOrder);
router.put('/order/:id', updateOrderStatus);


module.exports = router;