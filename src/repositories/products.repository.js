const { products } = require('../models');

const getAllProducts = async () => {
    try {
        const allProducts = await products.findAll();
        return allProducts;
    } catch (error) {
        console.log(error);
    }
}

const getOneProduct = async (id) => {
    try {
        const product = await products.findOne({
            where: {
                id
            }
        });
        return product;
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (product) => {
    try {
        const newProduct = await products.create(product);
        return newProduct;
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (id, data) => {
    try {
        const updatedProduct = await products.update(data, {
            where: {
                id
            }
        });
        return updatedProduct;
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await products.destroy({
            where: {
                id
            }
        });
        return deletedProduct;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

