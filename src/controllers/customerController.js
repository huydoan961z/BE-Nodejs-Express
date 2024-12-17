// key: value
const {
    uploadSingleFile
} = require('../services/fileService');

const {
    createCustomerService,
    createMultiCustomerService,
    postGetAllCustomerService
} = require('../services/customerService');
const Customer = require('../models/customer');

module.exports = {
    postCreateCustomer: async (req, res) => {
        let {
            name,
            address,
            email,
            city,
            image,
            descr
        } = req.body
        let imageURL = ''

        if (!req.files || !req.files.image) {
            return res.status(400).send("No files were uploaded.");
        }

        const result = await uploadSingleFile(req.files.image);
        imageURL = result.path
        // if (result.status === "success") {
        //     console.log(result)
        //     imageURL = result.path
        //     console.log("check img url", imageURL)
        //     return res.status(200).json({
        //         message: "File uploaded successfully",
        //         path: result.path,

        //     });
        // }

        let customerData = {
            name, // equal name: name
            address,
            email,
            city,
            image: imageURL,
            descr
        }

        let customer = await createCustomerService(customerData)
        console.log(customer)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = req.body.customers // nếu dữ liệu dạng text, json..
        let result = await createMultiCustomerService(customers)
        return res.status(200).json({
            EC: 0,
            data: result
        })

    },

    postGetAllCustomer: async (req, res) => {
        console.log(req.query)
        let limit = req.query.limit
        let page = req.query.page
        let result = null

        if (limit && page) {
            result = await postGetAllCustomerService(limit, page)
            return res.status(200).json({
                EC: 0,
                data: result
            })
        } else {
            result = await postGetAllCustomerService()
            return res.status(200).json({
                EC: 0,
                data: result
            })
        }



    },
    putUpdateCustomer: async (req, res) => {
        let cusID = req.body.id;
        let name = req.body.name;
        let address = req.body.address;
        let email = req.body.email;
        let city = req.body.city;
        let descr = req.body.descr;


        // Update to database
        let customer = await Customer.findByIdAndUpdate(cusID, {
            name: name,
            address: address,
            email: email,
            city: city,
            descr: descr
        })

        return res.status(200).json({
            ec: 0,
            data: customer
        })
    },
    deleteCustomer: async (req, res) => {
        let cusID = req.body.id
        console.log("check delte id", cusID)
        let customer = await Customer.deleteById(cusID)
        return customer

    },
    deleteArrayCustomer: async (req, res) => {
        let customerIDs = req.body.ids;

        try {
            let result = await Customer.delete({
                _id: {
                    $in: customerIDs
                }
            });

            return res.status(200).json({
                ec: 0,
                message: 'Customers deleted successfully',
                data: result
            });
        } catch (error) {
            console.error('Error deleting customers:', error);
            return res.status(500).json({
                ec: 1,
                message: 'Error deleting customers',
                error: error.message
            });
        }
    }

}