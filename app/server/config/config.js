//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password
// NOTE: Heroku configuration should be specified in code using heroku environment variables.
// https://devcenter.heroku.com/articles/config-vars

module.exports = {
    db: {
        uri: process.env.MONGODB_URI, //place the URI of your mongo database here.
    }, 
};
