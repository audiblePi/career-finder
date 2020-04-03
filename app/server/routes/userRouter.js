const users = require('../controllers/userController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.post('/', users.create);
usersRouter.get('/', users.readAll);
usersRouter.get('/:userId', users.read);
usersRouter.put('/', users.update);
usersRouter.delete('/', users.delete);

module.exports = usersRouter;