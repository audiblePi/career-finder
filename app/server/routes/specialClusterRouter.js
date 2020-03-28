const careerCluster = require('../controllers/careerClusterController.js');
const express = require('express');
const clusterRouter = express.Router();

clusterRouter.get('/', careerCluster.readAll);

module.exports = clusterRouter;