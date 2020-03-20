const users = require('../controllers/userController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.post('/', users.authenticate);
  
module.exports = usersRouter;