var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const auth = require('./routes/api/auth');


var app = express();

//middleware for bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//mongoDB configuration
const db = require('./setup/myurl').mongoUrl

//Attempt to
mongoose.connect(db)
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.log(err));


//tesitng -> route
app.get("/", (req, res) => {
    res.send("Server is running hello world");
});

//actual route

app.use('/api/auth',auth);

app.listen(3000, () => {
    console.log("Server is running")
});