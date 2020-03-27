const careerCluster = require('../controllers/carrerClusterController.js');
const express = require('express');
const clusterRouter = express.Router();

clusterRouter.get('/', careerCluster.readAll);

module.exports = clusterRouter;