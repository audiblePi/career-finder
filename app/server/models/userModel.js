const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    fname: { type: String },
    lname: { type: String },
    role: { type: String, enum: ['admin', 'student'], default: 'student' }, //admin, student
    group: { type: String },
    points: { type: Number, default: 0 }
});

//removes the password field for when being passed back to client
loginSchema.methods.toResponse = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

module.exports = inter = mongoose.model('users', loginSchema);