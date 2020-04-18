const mongoose = require('mongoose');

const career = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    // careerId: ObjectId?
    _id: String,
    name: {type: String, required: true, unique: true},
    shortDescription: String,
    description: String,
    salary: String, // Assuming no calculations needed...
    image: String,
    ditl: String,
    ditlImage: String,
    cluster: {type: String, required: true},
    celebrity: { // Celebrity article is unique to career, name is required.
        //name: {type: String, required: true},
        name: String,
        photo: String, // url to image file
        article: String
    }, // If we want to store association with cluster in career.
});

module.exports = mongoose.model('careers', career);