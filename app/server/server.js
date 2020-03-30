const express = require('./config/express.js');
const mongoose = require('mongoose');
const config = require('./config/config.js');
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js');
const clusterRouter = require('./routes/clusterRouter.js');
const specialClusterRouter = require('./routes/specialClusterRouter.js');
const users = require('./controllers/userController.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
console.log(config.db.uri);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// PRODUCTION ENDPOINT TEST -- GET NOT WORKING
//app.use('/auth', authRouter);
//app.use('/user', userRouter);
//app.use('/cluster', clusterRouter);
//app.use('/returnCluster', specialClusterRouter);