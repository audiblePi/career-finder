const mongoose = require('mongoose');

const cluster = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    //https://bezkoder.com/node-js-upload-store-images-mongodb/
    // clusterId: ObjectId?
    _id: Number,
    name: {type: String, required: true, unique: true},
    image: String, // url to image file
    keywords: [String], // Should reference 'name' in keyword.
    careers: [String] // Should reference 'name' in career.
});

module.exports = inter = mongoose.model('clusters', cluster);