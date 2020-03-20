import mongoose from 'mongoose';

const career = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    // careerId: ObjectId?
    name: String,
    description: String,
    salary: String, // Assuming no calculations needed...
    ditl: String,
    celebrity: { // If celebrity article is unique to career.
        name: String,
        photo: {data: Buffer},
        article: String
    }
});

export default mongoose.model('careers', career);