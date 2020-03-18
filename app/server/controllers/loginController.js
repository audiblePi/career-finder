const mongoose = require('mongoose');
const User = require('../models/UserModel.js');
const config = require('../config/config.js');

module.exports.authenticate = (req, res) => {
    if(req.body.username && req.body.password) {
        //for testing purposes until the database is populated
        //Team6 && Rocks
        //console.log(req.body.password); //useful to get the hash for the test list
        if('Team6' === req.body.username && '5cdfbc0ea6e85d2cc3dd5ddec72ffe1a' === req.body.password) {
            res.status = 200;
            res.send({result: 'match'});
        } else {
            //search database by username
            mongoose.connect(config.db.uri, {useNewURLParse: true, useUnifiedTopology: true});
            var found = User.findOne({user: req.body.username});
            mongoose.connection.close;
            //if no entry with that username
            if(found === null) {
                res.status = 200;
                res.send({result: 'username-not-found'});
                console.log('username not found');
                return;
            }
            //if username exists, and passwords are checked
            if(found.password === req.body.password) {
                res.status = 200;
                res.send({result: 'match'});
                console.log('login match');
                return;
            }
        }
    } else {
        res.status = 200;
        res.send({result: 'no-match'});
    }
};

module.exports.create = (req, res) => {
    mongoose.connect(config.db.uri, {useNewURLParse: true, useUnifiedTopology: true});
    var found = User.findOne({user: req.body.username});
    if(found !== null) {
        res.status = 400;
        mongoose.connection.close;
        res.send({result: 'username-already-exists'});
    } else {
        var newUser = new User({ user: req.body.username, password: req.body.password });
        newUser.save(function (err) {
            mongoose.connection.close;
            if(err) {
                res.status = 500;
                res.send(console.error(err));
            } else {
                res.status = 200;
                res.send({result: 'successfully-added'});
            }
        });
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