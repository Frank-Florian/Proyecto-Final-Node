const CartServices = require('../services/cart.services');

const createCart = async (req, res, next) => {
    try {
        const newCart = await CartServices.createNewCart(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const createProductInCart = async (req, res, next) => {
    try {
        const newProductInCart = await CartServices.createNewProductInCart(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}


const updateProductsStatus = async (req, res, next) => {
    try {
        const { id: cart_id } = req.params;
        await CartServices.updateStatus(cart_id);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createCart,
    createProductInCart,
    updateProductsStatus
}