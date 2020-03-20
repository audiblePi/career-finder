const mongoose = require('mongoose');
const User = require('../models/UserModel.js');
const config = require('../config/config.js');

module.exports.authenticate = (req, res) => {
    if(req.body.username && req.body.password) {
    //console.log(req.body.password); //useful to get the hash for the test list
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        User.findOne({ user: req.body.username })
            .then(found => {
                if(found.password === req.body.password) {
                    res.status = 200;
                    res.send({result: 'match', role: found.role});
                } else {
                    //password does not match
                    res.status = 200;
                    res.send({result: 'wrong-password'});
                }
            })
            .catch(err => {
                //database error, or no documents with that username
                res.status = 500;
                res.send({result: 'username-not-found', error: err});//or database issue
            });
    } else {
        //username and/or password null
        res.status = 300;
        res.send({result: 'invalid-entry'});
    }
    mongoose.connection.close;
};

module.exports.create = (req, res) => {
    console.log('create');
    if(req.body.username) {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        User.findOne({ user: req.body.username })
            .then(found => {
                if(found) {
                    //user already exists
                    res.status = 400;
                    res.send({result: 'username-already-exists'});
                    console.log('found');
                } else {
                    //user does not exist, so it will be added
                    var newUser = new User({ user: req.body.username });
                    if(req.body.password) {
                        newUser.password = req.body.password;
                    }
                    newUser.save(function (err) {
                        if(err) {
                            res.status = 500;
                            res.send({result: 'error'});
                        } else {
                            res.status = 200;
                            res.send({result: 'successfully-added'});
                        }
                    });
                }
            })
            .catch(err => {
                //database error
                res.status = 500;
                res.send({result: 'username-not-found', error: err});//or database issue
            });
        mongoose.connection.close;
    } else {
        //username and/or password null
        res.status = 300;
        res.send({result: 'username-required'});
    }
};

module.exports.read = (req, res) => {
    res.status = 501;
    res.end();
};

module.exports.update = (req, res) => {
    res.status = 501;
    res.end();
};

module.exports.delete = (req, res) => {
    res.status = 501;
    res.end();
};