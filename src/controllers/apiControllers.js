const connection = require('../config/database')
const Users = require('../models/users')


const {
    name
} = require('ejs')

const getUserAPI = async (req, res) => {
    let results = await Users.find({})
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const postUserAPI = async (req, res) => {
    //take info when user type and submit
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;

    let user = await Users.create({
        //the left must be right compare to in module
        email: email,
        city: city,
        names: fname
    })
    return res.status(200).json({
        ec: 0,
        data: user
    })

}

const putUpdateUser = async (req, res) => {
    let userId = req.body.id;
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;

    // Update to database
    let user = await Users.updateOne(_id = userId, {
        names: fname,
        email: email,
        city: city
    })
    return res.status(200).json({
        ec: 0,
        data: user
    })

}
const deleteUserAPI = async (req, res) => {
    try {

        const id = req.params.id; // Lấy id từ URL
        let user = await Users.deleteOne(_id = id); // Xóa user trong database
        if (!user) {
            return res.status(404).json({
                ec: 1,
                message: "User not found"
            });
        }
        return res.status(200).json({
            ec: 0,
            message: "User deleted successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            ec: -1,
            message: "Error deleting user",
            error: error.message
        });
    }
};

const postUploadSingleFile = (req, res) => {
    console.log("req", req.files)
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }
    return res.send("oke file")
}


module.exports = {
    getUserAPI,
    postUserAPI,
    putUpdateUser,
    deleteUserAPI,
    postUploadSingleFile
}