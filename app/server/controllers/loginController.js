const mongoose = require('mongoose');
const User = require('../models/UserModel.js');
const config = require('../config/config.js');

module.exports.read = (req, res) => {
    if(req.body.username && req.body.password) {
        //for testing purposes until the database is populated
        //Team6 && Rocks
        if('Team6' === req.body.username && '5cdfbc0ea6e85d2cc3dd5ddec72ffe1a' === req.body.password) {
            res.status = 200;
            res.send({result: 'match'});
        }
        //search database by username
        mongoose.connect(config.db.uri, {useNewURLParse: true, useUnifiedTopology: true});
        var found = User.findOne({user: req.body.username});
        mongoose.connection.close;
        //if no entry with that username
        if(found === null) {
            res.send({result: 'username-not-found'});
        }
        //if username exists, and passwords are checked
        if(found.password === req.body.password) {
            res.send({result: 'match'});
        }
    } else {
        res.send({result: 'no-match'});
    }
};