// key: value
const {
    uploadSingleFile
} = require('../services/fileService');

const {
    createCustomerService
} = require('../services/customerService')

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
    }

}