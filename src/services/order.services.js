const { createOrder, updateStatus, updateTotalPrice  } = require("../repositories/orders.repository");
const { createProductsInOrder, updatePrice, updateQuantity } = require("../repositories/productsInOrder.repository");



class OrderServices {
    static async createNewOrder(order) {
        try {
            const newOrder = await createOrder(order);
            return newOrder;
        } catch (error) {
            throw error;
        }
    }

    static async updateStatus(order_id) {
        try {
            await updateStatus(order_id);
        } catch (error) {
            throw error;
        }
    }

    static async createNewProductInOrder(product) {
        try {
            const newProductInOrder = await createProductsInOrder(product.product_id);
            if(!newProductInOrder){
                return await createProductsInOrder(product);
            }
            await updateQuantity(product.product_id);
            await updatePrice(product.product_id, product.price);
            await updateTotalPrice(product.order_id);
            return newProductInOrder;
        } catch (error) {
            throw error;
        }
    }

}


module.exports = OrderServices;