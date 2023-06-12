const {  products_in_orders } = require('../models');


const createProductsInOrder = async (product) => {
    try {
        const newProductInOrder = await products_in_orders.create(product);
        return newProductInOrder;
    } catch (error) {
        console.log(error);
    }
}

const updateQuantity = async (product_id) => {
    try {
        const productInCart = await products_in_orders.increment('quantity', {
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
        const productInCart = await products_in_orders.increment('price', {
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


module.exports = { 
    createProductsInOrder,
    updateQuantity,
    updatePrice
};