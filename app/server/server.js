const express = require('./config/express.js');
const mongoose = require('mongoose'); // Do we need this here?
const config = require('./config/config.js');
//const users = require('./controllers/userController.js'); // Do we need this? Moved routes to ./config/express.js
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
console.log(config.db.uri);

// Should this be moved to ./config/express.js? If it works don't fix I guess...
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());