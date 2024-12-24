const userReact = require('../models/userReact');

const postUserReactService = async (addInfo) => {
    let result = await userReact.create(addInfo);
    return result;
};

const getUserReactService = async () => {
    let result = await userReact.find({});
    return result;
};

const updateUserReactService = async (id, updateInfo) => {
    let result = await userReact.findByIdAndUpdate(id, updateInfo, {
        new: true
    });
    return result;
};

const deleteUserReactService = async (id) => {
    let result = await userReact.delete({
        _id: id
    });
    return result;
};

module.exports = {
    postUserReactService,
    getUserReactService,
    updateUserReactService,
    deleteUserReactService
};