const { createUser, updateUser, deleteUser, getUserById, login } = require('../repositories/users.repository');
const { createCart  } = require('../repositories/carts.repository');

class UserServices{
    static async createNewUser(newUser){
        try {
            const user = await createUser(newUser);
            const cart = await createCart({user_id: user.id});
            return {...user,...cart};
        } catch (error) {
            throw error;
        }
    }

    static async login(email){
        try {
            const user = await login(email);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async updateUserData(id, userData){
        try {
            const user = await updateUser(id, userData);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async deleteUserData(id){
        try {
            const user = await deleteUser(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getUserDataById(id){
        try {
            const user = await getUserById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsersData(data){
        try {
            const usersList = await getAllUsers(data);
            return usersList;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserServices;