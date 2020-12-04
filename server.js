const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3001

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect routes
app.use(require('./routes'));

//connect to the database if it exists, else it will create it
mongoose.connect('mongodb://localhost/network-api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// set mongoose to log database queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));