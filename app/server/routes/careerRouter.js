const careers = require('../controllers/careerController.js');
const express = require('express');
const careersRouter = express.Router();

careersRouter.get('/', careers.readAll); // Get by Cluster.
careersRouter.get('/:careerId', careers.read) // Get by Career.
careersRouter.post('/', careers.create);
careersRouter.put('/:careerId', careers.update);
//careersRouter.delete('/:careerId', careers.delete); // Not working

module.exports = careersRouter;