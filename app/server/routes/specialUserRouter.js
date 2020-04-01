const users = require('../controllers/userController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/', users.readAll);

module.exports = usersRouter;