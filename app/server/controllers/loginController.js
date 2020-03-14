/* global config */
/*
import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import config from '../config/config.js';
*/
const mongoose = require('mongoose');
const User = require('../models/UserModel.js');
const config = require('../config/config.js');

module.exports.read = (req, res) => {
    mongoose.connect(config.db.uri, {useNewURLParse: true, useUnifiedTopology: true});
    res.send(User.findOne({user: req.body.username}));
    mongoose.close();
};