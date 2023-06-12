const { Router } = require('express');
const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getOneProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
