var mongoose = require('mongoose');
var config = require('../config/config.js');
var async = require('async');

var Careers = require('../models/careerModel.js');
var Clusters = require('../models/clusterModel.js');

var careerData = require('../data/careerData.js');
var clusterData = require('../data/clusterData.js');

describe('Restarting Data', () => {

    test('deleting all careers', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
            
        await Careers.deleteMany({}, (err) => {
            if (err) throw err;
        });

        done();
    });

    test('deleting all clusters', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        await Clusters.deleteMany({}, (err) => {
            if (err) throw err;
        });

        done();
    })

    test('resetting careers', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

        await async.forEach(careerData, (doc, callback) => {
            Careers.findOne({_id: doc._id})
            .then(found => {
                if(!found) {
                    Careers.create(doc, (err) => {
                        if (err) throw err;
                        callback();
                    });
                }
            })
        }, () => {
             mongoose.connection.close();
        });

        done();
    })

    test('resetting all clusters', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        await async.forEach(clusterData, (doc, callback) => {
            Clusters.findOne({name: doc.name})
            .then(found => {
                if(!found) {
                    c = {
                        "name": doc.name,
                        "image": doc.image,
                        "keywords": doc.keywords,
                        "careers": doc.careers,
                    }

                    Clusters.create(c, (err) => {
                        if (err) throw err;
                        callback();
                    });
                }
            })
        }, () => {
             mongoose.connection.close();
        });

        done();
    })
});
