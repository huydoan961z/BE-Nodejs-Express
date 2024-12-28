const userReact = require('../models/userReact');
const jwt = require('jsonwebtoken');

const loginApiService = async (email, password) => {
    const user = await userReact.findOne({
        email: email
    })
    if (!user) {
        throw new Error("not found")
    }
    if (user.password != password) {
        throw new Error("not correct")

    }
    return user
}


const postUserReactService = async (addInfo) => {
    let result = await userReact.create(addInfo);
    return result;
};

const getUserReactService = async (limit, page) => {
    let skip = (page - 1) * limit;
    let result = await userReact.find({}).skip(skip).limit(limit).exec();
    return result;
};

const getUserReactServiceWithoutPagin = async () => {
    let result = await userReact.find({}).exec();
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
    loginApiService,
    postUserReactService,
    getUserReactService,
    updateUserReactService,
    deleteUserReactService,
    getUserReactServiceWithoutPagin
};