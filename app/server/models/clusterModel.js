import mongoose from 'mongoose';

const cluster = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    // clusterId: ObjectId?
    name: String,
    image: {data: Buffer},
    //keywords: [String], // Not sure if we want to reference a
                         // a seperate model for keywords or to
                        // just store them in arrays everywhere...
    keywords: [{
        type: String, // maybe enum... 'subject' or 'interest'
        value: String
    }],
    careers: [String] // Could reference GUID or career name.
});

export default mongoose.model('clusters', cluster);