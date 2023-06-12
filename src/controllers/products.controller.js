const ProductServices = require('../services/product.services');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await ProductServices.getAllProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        next(error);
    }
}

const getOneProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await ProductServices.getOneProduct(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

const createProduct = async (req, res, next) => {
    try {
        const newProduct = await ProductServices.createProduct(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await ProductServices.updateProduct(id, description);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ProductServices.deleteProduct(id);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
