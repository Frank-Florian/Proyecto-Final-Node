const { products_in_carts } = require('../models');

const createProductInCart = async (product) => {
    try {
        const newProductInCart = await products_in_carts.create(product);
        return newProductInCart;
    } catch (error) {
        console.log(error);
    }
}


const updateQuantity = async (product_id) => {
    try {
        const productInCart = await products_in_carts.increment('quantity', {
            by: 1,
            where: {
                product_id: product_id
            }
        });
        return productInCart;
    } catch (error) {
        console.log(error);
    }
}


const updatePrice = async (product_id, price) => {
    try {
        const productInCart = await products_in_carts.increment('price', {
            by: price,
            where: {
                product_id: product_id
            }
        });
        return productInCart;
    } catch (error) {
        console.log(error);
    }
}



const deleteProductInCart = async (product_id) => {
    try {
        const productInCart = await products_in_carts.destroy({
            where: {
                product_id: product_id
            }
        });
        return productInCart;
    } catch (error) {
        console.log(error);
    }
}

const getOneProductInCart = async (product_id) => {
    try {
        const productInCart = await products_in_carts.findOne({
            where: {
                product_id: product_id
            }
        });
        return productInCart;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProductInCart,
    updateQuantity,
    getOneProductInCart,
    deleteProductInCart,
    updatePrice
}

