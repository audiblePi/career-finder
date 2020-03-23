import mongoose from 'mongoose';

const keyword = new mongoose.Schema({
    //https://mongoosejs.com/docs/schematypes.html
    //https://mongoosejs.com/docs/validation.html
    // keywordId: ObjectId? Name should be unique identifier...
    // in other words... Math could be a subject or an interest...
    // but not both.
    name: {type: String, required: true},
    type: {type: String, enum: ['subject', 'interest'], required: true},
    associatedClusters: [String]
});

export default mongoose.model('keywords', keyword);