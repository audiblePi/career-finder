const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
    user: { type: String, required: true, unique: true },
    password: { type: String }
});

loginSchema.methods.isCorrect = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
        if(err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}

var inter = mongoose.model('users', loginSchema)

module.export = inter;