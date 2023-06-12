const { carts, products_in_carts } = require('../models');


const createCart = async (cart) => {
    try {
        const newCart = await carts.create(cart);
        return newCart;
    } catch (error) {
        console.log(error);
    }
    }

const updateTotalPrice = async (cart_id) => {
    try {
        const totalPrice = await products_in_carts.sum('price', { where: { cart_id } });
        await carts.update({ total_price: totalPrice }, { where: { id: cart_id } });
    } catch (error) {
        console.log(error);
    }
    }


const updateStatus = async (cart_id) => {
    try {
        const status = await products_in_carts.update({ status: 'purchased' }, { where: { cart_id } });
        return status;
    } catch (error) {
        console.log(error);
    }
    }

    module.exports = {
        createCart,
        updateTotalPrice,
        updateStatus
    }