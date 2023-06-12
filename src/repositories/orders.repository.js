const { orders, products_in_orders } = require("../models");

const createOrder = async (order) => {
    try {
        const newOrder = await orders.create(order);
        return newOrder;
    } catch (error) {
        throw error;
    }
}


const updateTotalPrice = async (order_id) => {
    try {
        const totalPrice = await products_in_orders.sum('price', { where: { order_id } });
        await carts.update({ total_price: totalPrice }, { where: { id: cart_id } });
    } catch (error) {
        console.log(error);
    }
    }

    const updateStatus = async (order_id) => {
        try {
            const status = await products_in_orders.update({ status: 'delivered' }, { where: { order_id } });
            return status;
        } catch (error) {
            console.log(error);
        }
        }


module.exports = { 
    createOrder,
    updateTotalPrice,
    updateStatus
 };