const mongoose = require('mongoose');
const User = require('../models/UserModel.js');
const config = require('../config/config.js');

module.exports.read = (req, res) => {
    if(req.body.username && req.body.password) {
        if('Team6' === req.body.username && 'Rocks' === req.body.password) {
            res.status = 200;
            res.end();
        }
        mongoose.connect(config.db.uri, {useNewURLParse: true, useUnifiedTopology: true});
        var found = User.findOne({user: req.body.username});
        mongoose.connection.close;
        if(found === null) {
            res.status = 404;
            res.end();
        }
        if(found.password === req.body.password) {
            res.status = 200;
            res.end();
        }
    }
    res.status = 404;
    res.end();
};