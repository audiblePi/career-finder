const users = require('../controllers/loginController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.post('/', users.authenticate);
  
module.exports = usersRouter;