const { Router } = require('express');
const { createUser, login, getUserById, updateUser, deleteUser, allUsers } = require('../controllers/users.controller');
const router = Router();

router.post('/signup', createUser);
router.post('/login', login);
router.get('/users', allUsers);
router.get('/user/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('user/:id', deleteUser);


module.exports = router;