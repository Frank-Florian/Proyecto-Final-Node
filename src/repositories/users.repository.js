const { users, carts } = require('../models');

const createUser = async (newUser) => {
    try {
        const user = await users.create(newUser);
        return user;
    } catch (error) {
        throw error;
    }
    }

const login = async (email) => {
    try {
        const user = await users.findOne({ where: { email } });
        return user;
    } catch (error) {
        throw error;
    }
    }

const updateUser = async (id, userData) => {
    const user = await users.update(userData, {
        where: { id }
    });
    return user;
    }


const deleteUser = async (id) => {
    const user = await users.destroy({
        where: { id },
    });
    return user;
    }

// const getUserById = async (id) => {
//     const user = await users.findByPk(id);
//     delete user.dataValues.password;
//     return user;
//     }

//obtener un usuario por ir exluyendo el password de la respuesta e incluyendo el cart
const getUserById = async (id) => {
    const user = await users.findByPk(id
    //     , {
    //     attributes: {
    //         exclude: ['password']
    //     },
    //     include: ['carts']
    // }
    );
    return user;
    }

const getAllUsers = async () => {
    const usersList = await users.findAll();
    return usersList;
    }



    module.exports = {
        createUser,
        updateUser,
        deleteUser,
        getUserById,
        login,
        getAllUsers
    };