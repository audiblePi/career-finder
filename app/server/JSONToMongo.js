'use strict';

var fs = require('fs');
var mongoose = require('mongoose');
var Users = require('./models/userModel.js');
var config = require('./config/config.js');
var async = require('async');

module.exports = {
	restartUserDatabase: function() {
            mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

            Users.deleteMany({}, (err) => {
                if (err) throw err;
            });
		
            fs.readFile('listings.json', 'utf8', (err, data) => {
            if (err) throw err;
            let UsersData = JSON.parse(data);

            async.forEach(UsersData.entries, (doc, callback) => {
                //since each user is unique, this prevents database errors
                Users.findOne({user: doc.user})
                .then(found => {
                    if(found) {

                    } else {
                        Users.create(doc, (err) => {
                        if (err) throw err;
                        callback();
                        });
                    }
                })

            }, () => {
                mongoose.connection.close();
            });
        });
	}
};