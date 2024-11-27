const connection = require('../config/database')
const getAllUsers = async () => {
    let [results, fields] = await connection.query('Select * from Users u')
    return results;

}

module.exports = {
    getAllUsers,
}