const mongoose = require('mongoose');
const config = require('../config/config.js');
const careers = require('../models/careerModel.js');

// Create new career doc. NOTE: need to return _id... should be in newCareer right? Yep... should be...
// new careers(req.body) will return the resulting doc... newCareer._id will get the default _id...
// https://mongoosejs.com/docs/guide.html#_id >> If _id is not specified... MongoDB will generate it.
// All docs must have _id or Mongoose will not save it... so we can always use _id to retrieve
// a doc... models have several methods if I recall... like findById() >>
// https://mongoosejs.com/docs/api.html#model_Model.findById
// We can also 'reference' the id of one doc from another model. All we have to do is store _id in
// a field of ObjectId type as the documentation linked in the models shows. If we need to we
// can convert doc._id.toString(). From the documentation I believe we can create new ids of our own
// like  new mongoose.type.ObjectId(). It looks like we may also be able to convert ObjectId -> String
// -> ObjectId from  https://masteringjs.io/tutorials/mongoose/find-by-id  by feeding the string
// into ObjectId(<string>) (We can also just assign anything we want to _id as long as it is unique.)
exports.create = async (req, res) => {
    mongoose.connect(config.db.uri, {useNeUrlParser: true, useUnifiedTopology: true});
    // Will mongoose handle it if required values missing? Should check... maybe need
    // error handling.
    let newCareer = new careers(req.body);
    await newCareer.save((err) => {
        if (err) {
            res.writeHead(500, "Internal Server Error");
            res.write("error: \' " + err + " \'");
            res.end();
        } else {
            res.writeHead(200, "OK");
            res.write(JSON.stringify(newCareer));
            res.end();            
        };
    })
    mongoose.connection.close();
};

// Read by careerId... _id should be in doc here as well right?
exports.read = (req, res) => {
    mongoose.connect(config.db.uri, {useNeUrlParser: true, useUnifiedTopology: true});
    careers.findById(req.params.careerId, (err, doc) => {
        if (err) {
            res.writeHead(500, "Internal Server Error");
            res.write("error: \' " + err + " \'");
            res.end();
        } else if (doc == null) {
            res.writeHead(200, "OK");
            res.write(JSON.stringify({error: "The requested career could not be located."}));
            res.end();
        } else {
            res.writeHead(200, "OK");
            res.write(JSON.stringify(doc));
            res.end();
        };
    });
    mongoose.connection.close();
};

// Update career by careerId
exports.update = (req, res) => {
    mongoose.connect(config.db.uri, {useNeUrlParser: true, useUnifiedTopology: true});
    careers.findByIdAndUpdate(req.params.careerId, req.body, {new: true}, (err, doc) =>{
        if (err) {
            res.writeHead(500, "Internal Server Error");
            res.write("error: \' " + err + " \'");
            res.end();
        } else {
            res.writeHead(200, "OK");
            res.write(JSON.stringify(doc));
            res.end();            
        };
    });
    mongoose.connection.close();
};

// Delete career by careerId
exports.remove = (req, res) => {
    mongoose.connect(config.db.uri, {useNeUrlParser: true, useUnifiedTopology: true});
    careers.findByIdAndRemove(req.params.careerId, (err, doc) => {
        if (err) {
            res.writeHead(500, "Internal Server Error");
            res.write("error: \' " + err + " \'");
            res.end();
        } else if (doc == null) { // null == null && null == undefined, null === null only
            res.writeHead(200, "OK");
            res.write(JSON.stringify({error: "The requested career could not be located."}));
            res.end();
        } else {
            res.writeHead(200, "OK");
            res.write("Listing \'" + doc._id + "\' deleted successfully.");
            res.end();
        };
    });
    mongoose.connection.close();    
};