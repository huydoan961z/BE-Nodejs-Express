const {
    postUserReactService,
    getUserReactService,
    updateUserReactService,
    deleteUserReactService,
    getUserReactServiceWithoutPagin,


} = require("../services/userReactService.js");
const userReact = require('../models/userReact.js')

const postUserReact = async (req, res) => {
    let addInfo = await req.body;
    let result = await postUserReactService(addInfo);
    console.log(result.length)
    return res.status(200).json({
        total: data.length,

        EC: 0,
        data: result

    });
};


const postCreateUserReact = async (req, res) => {
    let regisInfo = await req.body
    let result = await postUserReactService(regisInfo)
    return res.status(200).json({
        EC: 0,
        data: result

    });
}

const getUserReact = async (req, res) => {
    let limit = parseInt(req.query.limit); // Default limit to 5 if not provided
    let page = parseInt(req.query.page); // Default page to 1 if not provided

    if (limit && page) {
        let result = await getUserReactService(limit, page);
        let totalCount = await userReact.countDocuments();
        return res.status(200).json({
            total: totalCount,
            EC: 0,
            data: result
        });
    } else {
        let result = await getUserReactServiceWithoutPagin();
        let totalCount = result.length
        return res.status(200).json({
            total: totalCount,
            EC: 0,
            data: result
        });
    }
};


const updateUserReact = async (req, res) => {
    let userId = req.body.id;
    let updateInfo = req.body;
    try {
        let result = await updateUserReactService(userId, updateInfo);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            EC: 1,
            message: error.message
        });
    }
};

const deleteUserReact = async (req, res) => {
    let userId = req.body.id;
    try {
        let result = await deleteUserReactService(userId);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            EC: 1,
            message: error.message
        });
    }
};

module.exports = {
    postUserReact,
    getUserReact,
    updateUserReact,
    deleteUserReact,
    postCreateUserReact
};