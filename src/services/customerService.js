const Customer = require('../models/customer')
const createCustomerService = async (customerData) => {
    console.log(customerData.image)
    try {
        // in mongoose there are two way to create, create or save
        // save use when you are customer new ...
        // in this situation we use create
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            email: customerData.email,
            city: customerData.city,
            image: customerData.image,
            descr: customerData.descr
        })
        return result;
    } catch (error) {
        console.log(error)
    }

}
module.exports = {
    createCustomerService
}