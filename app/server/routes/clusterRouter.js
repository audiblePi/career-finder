const careerCluster = require('../controllers/careerClusterController.js');
const express = require('express');
const clusterRouter = express.Router();

clusterRouter.post('/', careerCluster.create);
clusterRouter.get('/', careerCluster.read);
clusterRouter.put('/', careerCluster.update);
clusterRouter.delete('/', careerCluster.delete);

module.exports = clusterRouter;