const express = require('./config/express.js');
const mongoose = require('mongoose');
const config = require('./config/config.js');
const loginRouter = require('./routes/loginRouter.js');

const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));

app.use('/', loginRouter);
