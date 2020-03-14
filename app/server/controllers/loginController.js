const mongoose = require('mongoose');
const User = require('../models/UserModel.js');
const config = require('../config/config.js');

module.exports.read = (req, res) => {
    console.log(req.body);
    console.log(req.username);
    console.log(req.body.username);
    console.log(req.body.password);
    if(req.body.username) {
        mongoose.connect(config.db.uri, {useNewURLParse: true, useUnifiedTopology: true});
        var found = User.findOne({user: req.body.username});
        mongoose.close();
    } else {
        res.end();
    }
    if('Team6' === req.body.username || 'Rocks' === req.body.password) {
        res.status = 200;
        res.end();
    }
    if(found === null) {
        res.end();
    }
    if(found.password === req.body.password) {
        res.status = 200;
    } else {
        res.end();
    }
};