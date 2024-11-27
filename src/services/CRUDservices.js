const connection = require('../config/database')
const getAllUsers = async () => {
    let [results, fields] = await connection.query('Select * from Users u')
    return results;

}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('Select * from Users u Where id=?', [id])
    return results;
}

module.exports = {
    getAllUsers,
    getUserById,
}