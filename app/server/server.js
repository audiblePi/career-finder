const express = require('./config/express.js');
const mongoose = require('mongoose');
const config = require('./config/config.js');
const loginRouter = require('./routes/loginRouter.js');
const users = require('./controllers/loginController.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/auth', loginRouter);
