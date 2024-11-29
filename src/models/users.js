const mongoose = require('mongoose');

//create the db to see in mongodb compass
//shape of database
const userSchema = new mongoose.Schema({
    names: String,
    email: String,
    city: String,
});

//model as the ban sao of schema to change , 
const Users = mongoose.model('Users', userSchema);

module.exports = Users;