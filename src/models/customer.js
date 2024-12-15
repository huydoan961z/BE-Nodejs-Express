const mongoose = require('mongoose');

//create the db to see in mongodb compass
//shape of database
const customerSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    address: String,
    email: String,
    city: String,
    image: String,
    descr: String
}, {
    timestamps: true
});

//model as the ban sao of schema to change , 
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;