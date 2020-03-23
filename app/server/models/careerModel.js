import mongoose from 'mongoose';

const career = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    // careerId: ObjectId?
    name: {type: String, required: true},
    description: String,
    salary: String, // Assuming no calculations needed...
    ditl: String,
    celebrity: { // Celebrity article is unique to career, name is required.
        name: {type: String, required: true},
        photo: String, // url to image file
        article: String
    }
});

export default mongoose.model('careers', career);