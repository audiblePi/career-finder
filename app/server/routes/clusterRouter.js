const careerCluster = require('../controllers/careerClusterController.js');
const express = require('express');
const clusterRouter = express.Router();

clusterRouter.post('/', careerCluster.create);
clusterRouter.get('/', careerCluster.readAll);
clusterRouter.get('/:clusterId', careerCluster.read);
clusterRouter.put('/:clusterId', careerCluster.update);
clusterRouter.delete('/:clusterId', careerCluster.delete);

module.exports = clusterRouter;