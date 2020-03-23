import mongoose from 'mongoose';

const cluster = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    //https://bezkoder.com/node-js-upload-store-images-mongodb/
    // clusterId: ObjectId?
    name: {type: String, required: true},
    image: String, // url to image file
    keywords: [String], // Should reference 'name' in keyword.
    careers: [String] // Should reference 'name' in career.
});

export default mongoose.model('clusters', cluster);