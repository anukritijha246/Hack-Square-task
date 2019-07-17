const express = require('express');
const router = express.Router();
module.exports = router ;
const routes = require('./routes/route1');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator'); //for checkBody function
var app = express();
const port = process.env.PORT || 3300;




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/api', routes);


const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://dba:password246@cluster0-5cz48.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));






app.listen(port, function() {
    console.log("Listening on *:" + port);
});
