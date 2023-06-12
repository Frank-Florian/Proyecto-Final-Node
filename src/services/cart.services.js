const { createCart, updateTotalPrice, updateStatus } = require('../repositories/carts.repository');
const { createProductInCart, updateQuantity, getOneProductInCart, updatePrice } = require('../repositories/productsInCart.repository');

class CartServices {
    static async createNewCart(cart) {
        try {
            const newCart = await createCart(cart);
            return newCart;
        } catch (error) {
            throw error;
        }
    }

    static async createNewProductInCart(product) {
        try {
            const newProductInCart = await getOneProductInCart(product.product_id);
            if(!newProductInCart){
                return await createProductInCart(product);
            }
            await updateQuantity(product.product_id);
            await updatePrice(product.product_id, product.price);
            await updateTotalPrice(product.cart_id);
            return newProductInCart;
        } catch (error) {
            throw error;
        }
    }

    static async updateStatus(cart_id) {
        try {
            await updateStatus(cart_id);
        } catch (error) {
            throw error;
        }
    }
    

}

module.exports = CartServices;