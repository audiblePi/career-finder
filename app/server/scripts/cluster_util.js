'use strict';

var fs = require('fs');
var mongoose = require('mongoose');
var Clusters = require('../models/clusterModel.js');
var config = require('../config/config.js');
var clusterData = require('./clusterData.js');
var async = require('async');

module.exports = {
    removeAllClusters: function() {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        Clusters.deleteMany({}, (err) => {
            if (err) throw err;
        });
    },
	loadClusters: function() {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        async.forEach(clusterData, (doc, callback) => {
            Clusters.findOne({name: doc.name})
            .then(found => {
                if(found) {

                } else {
                    let cluster = {
                        "name": doc.name,
                        "image": doc.image,
                        "keywords": doc.keywords,
                        "careers": doc.careers
                    }
                    Clusters.create(cluster, (err) => {
                        if (err) 
                            throw err;
                        callback();
                    });
                }
            })
        }, () => {
             mongoose.connection.close();
        });
	}
};