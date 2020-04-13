const mongoose = require('mongoose');
const CareerCluster = require('../models/clusterModel.js');
const config = require('../config/config.js');

//create one cluster by name
module.exports.create = (req, res) => {
    //all these are required?
    if(req.body.name && req.body.image && req.body.keywords && req.body.careers) {
        //check for required fields
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        CareerCluster.findOne({name: req.body.name})
            .then(found => {
                if(found) {
                    //cluster already exists
                    res.send({result: 'cluster-already-exists'});
                } 
                else {
                    //add cluster
                    new CareerCluster(req.body)
                        .save(function (err) {
                            if(err) {
                                res.send({result: 'database-error', error: err});
                            } else {
                                res.send({result: 'successfully-added'});
                            }
                        });
                }
            })
            .catch(err => {
                //database error
                res.send({result: 'database-error', error: err});
            });

        mongoose.connection.close;
    } 
    else {
        //required fields not met
        res.send({result: 'required-fields-not-met'});
    }
};

//return all career clusters
module.exports.readAll = (req, res) => {

    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    CareerCluster.find({})
        .then(found => {
            if(found[0]) {
                //res.write({result: 'match'});
                res.send(found);
            } else {
                res.send({result: 'no-clusters'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};

//read one cluster by id
module.exports.read = (req, res) => {

    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    CareerCluster.findOne({_id: req.params.clusterId})
        .then(found => {
            if(found) {
                //res.write({result: 'match'});
                res.send(found);
            } else {
                res.send({result: 'cluster-not-found'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};

//update cluster, arrays are replaced by what is provided
module.exports.update = (req, res) => {

    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    CareerCluster.findOne({_id: req.params.clusterId})
        .then(found => {
            if(found) {
                CareerCluster.updateOne({_id: req.params.clusterId}, {$set: req.body})
                .then(updated => {
                    res.send({
                        result: 'update-success',
                        cluster: found,
                    });
                })
                .catch(err => {
                    //not sure what error mongoose would throw
                });
            } else {
                res.send({result: 'cluster-not-found'});
                //maybe add to db if not already existing?
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};

//add update cluster for pushing new data to arrays

//delete one cluster
module.exports.delete = (req, res) => {

    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
   
    CareerCluster.findOne({_id: req.params.clusterId})
        .then(found => {
            if(found) {
                CareerCluster.deleteOne({_id: req.params.clusterId}, {$set: req.body})
                .then(deleted => {
                    res.send({
                        result: 'delete-success',
                        cluster: found,
                    });
                })
                .catch(err => {
                    //not sure what error mongoose would throw
                });
            } else {
                res.send({result: 'cluster-not-found'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};

