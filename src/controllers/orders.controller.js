const OrderServices = require("../services/order.services");

const createOrder = async (req, res, next) => {
    try {
        const newOrder = await OrderServices.createNewOrder(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const createProductsInOrder = async (req, res, next) => {
    try {
        const newProductInOrder = await OrderServices.createNewProductInOrder(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const updateOrderStatus = async (req, res, next) => {
    try {
        const { id: order_id } = req.params;
        await OrderServices.updateStatus(order_id);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}



module.exports = {
    createOrder,
    createProductsInOrder,
    updateOrderStatus
};