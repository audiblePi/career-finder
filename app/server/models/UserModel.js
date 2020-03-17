const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    user: { type: String, required: true, unique: true },
    password: { type: String }
});

module.exports = inter = mongoose.model('users', loginSchema);