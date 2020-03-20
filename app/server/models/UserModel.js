const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    user: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, default: 'student' }, //admin, student, teacher, etc
    points: { type: Number, default: 0 }
});

module.exports = inter = mongoose.model('listings', loginSchema);