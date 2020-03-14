const users = require('../controllers/loginController.js');
const express = require('express');
const usersRouter = express.Router();

usersRouter.post('/', users.read);
//usersRouter.route('/').post(users.read);
  
module.exports = usersRouter;