const mongoose = require('mongoose');

//create the db to see in mongodb compass
//shape of database
const kittySchema = new mongoose.Schema({
    name: String
});

//model as the ban sao of schema to change , 
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;