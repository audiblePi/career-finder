var mongoose = require('mongoose');
var config = require('../config/config.js');
var async = require('async');

var Careers = require('../models/careerModel.js');
var Clusters = require('../models/clusterModel.js');
var Users = require('../models/userModel.js');

var careerData = require('../data/careerData.js');
var clusterData = require('../data/clusterData.js');
var userData = require('../data/userData.js');

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

    test('deleting all users', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        await Users.deleteMany({}, (err) => {
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
                    Clusters.create(doc, (err) => {
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

    test('resetting all users', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        
        await async.forEach(userData, (doc, callback) => {
            Users.findOne({user: doc.user})
            .then(found => {
                if(!found) {
                    Users.create(doc, (err) => {
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
