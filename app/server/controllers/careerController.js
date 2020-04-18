const mongoose = require('mongoose');
const config = require('../config/config.js');
const Career = require('../models/careerModel.js');

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
// exports.create = async (req, res) => {
//     mongoose.connect(config.db.uri, {useNeUrlParser: true, useUnifiedTopology: true});
//     // Will mongoose handle it if required values missing? Should check... maybe need
//     // error handling.
//     let newCareer = new careers(req.body);
//     await newCareer.save((err) => {
//         if (err) {
//             res.writeHead(500, "Internal Server Error");
//             res.write("error: \' " + err + " \'");
//             res.end();
//         } else {
//             res.writeHead(200, "OK");
//             res.write(JSON.stringify(newCareer));
//             res.end();            
//         };
//     })
//     mongoose.connection.close();
// };

module.exports.create = (req, res) => {
    if(req.body.name && req.body.cluster) {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

        Career.findOne({name: req.body.name})
            .then(found => {
                if(found) {
                    res.send({result: 'career-already-exists'});
                } 
                else {
                    let id = mongoose.mongo.ObjectId().toString();
                    
                    let newCareer = { 
                        _id: id, 
                        ...req.body 
                    }

                    new Career(newCareer)
                        .save(function (err) {
                            if(err) {
                                res.send({result: 'database-error', error: err});
                            } 
                            else {
                                res.send({
                                    result: 'successfully-added',
                                    career: newCareer,
                                });
                            }
                        });
                }
            })
            .catch(err => {
                //database error
                res.send({result: 'database-error', error: err});
            });

        mongoose.connection.close;
    } 
    else {
        //required fields not met
        res.send({result: 'required-fields-not-met'});
    }
};


module.exports.readAll = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    Career.find({})
        .then(found => {
            if (found[0]) {
                res.send(found);
            } 
            else {
                res.send({result: 'no-careers'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};


module.exports.read = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    Career.findOne({_id: req.params.careerId})
        .then( found => {
            if (found) {
                res.send(found);
            } 
            else {
                res.send({result: 'career-not-found'});
            }
        })
        .catch( err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};


module.exports.update = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

    Career.findOne({_id: req.params.careerId})
        .then(found => {
            if(found) {
                Career.updateOne({_id: req.params.careerId}, {$set: req.body})
                .then(updated => {
                    res.send({
                        result: 'update-success',
                        career: found,
                    });
                })
                .catch(err => {
                    //not sure what error mongoose would throw
                });
            } 
            else {
                res.send({result: 'career-not-found'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};


module.exports.delete = (req, res) => {
    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
   
    Career.findOne({_id: req.params.careerId})
        .then(found => {
            if(found) {
                Career.deleteOne({_id: req.params.careerId}, {$set: req.body})
                .then(deleted => {
                    res.send({
                        result: 'delete-success',
                        career: found,
                    });
                })
                .catch(err => {
                    //not sure what error mongoose would throw
                });
            } 
            else {
                res.send({result: 'career-not-found'});
            }
        })
        .catch(err => {
            res.send({result: 'error', error: err});
        });

    mongoose.connection.close;
};