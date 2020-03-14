const users = require('../controllers/loginController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/:username', users.read);

module.exports = usersRouter;