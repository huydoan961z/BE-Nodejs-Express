const {
    postUserReactService,
    getUserReactService,
    updateUserReactService,
    deleteUserReactService
} = require("../services/userReactService.js");

const postUserReact = async (req, res) => {
    let addInfo = await req.body;
    let result = await postUserReactService(addInfo);
    return res.status(200).json({
        EC: 0,
        data: result
    });
};

const getUserReact = async (req, res) => {
    let result = await getUserReactService();
    return res.status(200).json({
        EC: 0,
        data: result
    });
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
    deleteUserReact
};