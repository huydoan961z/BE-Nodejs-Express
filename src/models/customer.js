const mongoose = require('mongoose');
// for soft delete
const moongoose_delete = require('mongoose-delete')
//create the db to see in mongodb compass
//shape of database
const customerSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    address: String,
    email: String,
    city: String,
    image: String,
    descr: String
}, {
    timestamps: true,
    statics: {
        findByHuy(name) {
            return this.find({
                name: new RegExp(name, 'i')
            })
        }
    }
});
customerSchema.plugin(moongoose_delete)

//model as the ban sao of schema to change , 
const Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;