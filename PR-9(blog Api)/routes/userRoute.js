const express = require('express');

const routes = express.Router();

const { addUser, viewUser, deleteUser, updateUser, loginUser } = require('../controllers/userController');
const { tokenVerify, Admin } = require('../middleware/Auth');

routes.post('/registeruser', addUser);
routes.get('/viewuser', tokenVerify, Admin, viewUser);
routes.delete('/deleteuser', tokenVerify, Admin, deleteUser);
routes.put('/updateuser', tokenVerify, Admin, updateUser);
routes.post('/loginuser', loginUser);

module.exports = routes;
