const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../repositories/products.repository');

class ProductServices {
    static async getAllProducts() {
        try {
            const allProducts = await getAllProducts();
            return allProducts;
        } catch (error) {
            throw error;
        }
    }

    static async getOneProduct(id) {
        try {
            const product = await getOneProduct(id);
            return product;
        } catch (error) {
            throw error;
        }
    }

    static async createProduct(newProduct) {
        try {
            const product = await createProduct(newProduct);
            return product;
        } catch (error) {
            throw error;
        }
    }

    static async updateProduct(id, data) {
        try {
            const product = await updateProduct(id, data);
            return product;
        } catch (error) {
            throw error;
        }
    }

    static async deleteProduct(id) {
        try {
            const product = await deleteProduct(id);
            return product;
        } catch (error) {
            throw error;
        }
    }
}