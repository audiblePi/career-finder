const users = require('../controllers/loginController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.post('/', users.create);
//usersRouter.get('/', users.read);
usersRouter.put('/', users.update);
usersRouter.delete('/', users.delete);

module.exports = usersRouter;
