const mongoose = require('mongoose');
const User = require('../models/userModel.js');
const config = require('../config/config.js');

module.exports.authenticate = (req, res) => {
    if(req.body.username && req.body.password) {
        //console.log(req.body.password);
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        User.findOne({ user: req.body.username })
            .then(found => {
                if(found.password === req.body.password) {
                    //password matches
                    res.send({found, result: 'match'});
                } else {
                    //password does not match
                    res.send({result: 'wrong-password'});
                }
            })
            .catch(err => {
                //database error
                res.status = 500;
                res.send({result: 'database-error', error: err});//or database issue
            });
    } else {
        //username and/or password null
        res.send({result: 'invalid-entry'});
    }
    mongoose.connection.close;
};

module.exports.create = (req, res) => {
    if(req.body.username) {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        User.findOne({ user: req.body.username })
            .then(found => {
                if(found) {
                    //user already exists
                    res.send({result: 'username-already-exists'});
                } else {
                    //user does not exist, so it will be added
                    var newUser = new User({ user: req.body.username });
                    if(req.body.password) {
                        newUser.password = req.body.password;
                    }
                    newUser.save(function (err) {
                        if(err) {
                            //error in saving document to db
                            res.status = 500;
                            res.send({result: 'database-error', error: err});
                        } else {
                            //everything fine
                            res.send({result: 'successfully-added'});
                        }
                    });
                }
            })
            .catch(err => {
                //database error
                res.send({result: 'database-error', error: err});//or database issue
            });
        mongoose.connection.close;
    } else {
        //username undefined/null
        res.send({result: 'username-required'});
    }
};

//sends document based off user passed in get request body
module.exports.read = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    User.findOne({user: req.body.username})
        .then(found => {
            if(found) {
                res.write({result: 'match'});
                res.send(found.toResponse());
            } else {
                res.send({result: 'user-not-found'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });
    mongoose.connection.close;
};

//send all users
module.exports.readAll = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    User.find({})
        .then(found => {
            if(found[0]) {
                res.write({result: 'match'});
                //remove passwords on send
                found.forEach(function(i) {
                    i.toResponse();
                });
                res.send(found);
            } else {
                res.send({result: 'no-users'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });
    mongoose.connection.close;
};

module.exports.update = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    User.findOne({name: req.body.name})
        .then(found => {
            if(found) {
                User.updateOne({name: req.body.name}, {$set: req.body})
                .then(updated => {
                    res.send({result: 'update-success'});
                })
                .catch(err => {
                    //not sure what error mongoose would throw
                });
            } else {
                res.send({result: 'user-not-found'});
                //maybe add to db if not already existing?
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });
    mongoose.connection.close;
};
//remove user based off of username
module.exports.delete = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    User.deleteOne({user: req.body.username}), function(err) {
        if(err) {
            res.send({result: 'error', error: err});
        } else {
            res.send({result: 'user-removed'});
        }
    };
    mongoose.connection.close;
};
//template endpoint for database
/*
module.exports.templates = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    User.function({parameter: 'value'})
    .then(functionReturn => {
        
    })
    .catch(err => {
        
    });
    mongoose.connection.close;
};
*/