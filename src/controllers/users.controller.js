const UserServices = require('../services/user.services');
const bcrypt = require('bcrypt');   
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { sendWelcomeMail } = require('../utils/sendMail');

const createUser = async (req, res, next) => {
    try {
        let password = req.body.password = await  bcrypt.hash(req.body.password, Number.parseInt(process.env.ROUNDS));
        const user = await UserServices.createNewUser({ ...req.body, password });
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' }, { algorithm: 'HS512' });
        sendWelcomeMail(req.body.email, { username: req.body.username, verifyToken: token });
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserServices.login(email);
        if (!user) {
            return next({
                status: 400,
                name: 'invalid email',
                message: 'User not exist'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next({
                status: 400,
                name: 'Invalid password',
                message: 'The password does not match with user email'
            });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' }, { algorithm: 'HS512' });
        user.token = token;
        delete user.dataValues.password;
        res.status(200).json(user, token);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const user = await UserServices.updateUserData(id, userData);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserServices.deleteUserData(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserServices.getUserDataById(id, {
            attributes: {
                exclude: ['password']
            },
            include: ['carts']
        });
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const allUsers = async (req, res, next) => {
    try {
        const usersList = await UserServices.getAllUsersData();
        res.status(200).json(usersList);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    login,
    allUsers
};

