<<<<<<< HEAD
// I do not think heroku relies on this but deployment fails without it. I think we would have to implement
// conditional includes (say config.example if config is not present).

//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
         //uri: 'mongodb://127.0.0.1:27017/_career_finder', //place the URI of your mongo database here.
         uri: 'mongodb+srv://gator123:gator123@cen3031-spring-2020-wsg4p.mongodb.net/career_finder?retryWrites=true&w=majority'
    }, 
 };
 
=======
//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password
// NOTE: Heroku configuration should be specified in code using heroku environment variables.
// https://devcenter.heroku.com/articles/config-vars

module.exports = {
    db: {
        uri: process.env.MONGODB_URI, //place the URI of your mongo database here.
    }, 
};
>>>>>>> master
