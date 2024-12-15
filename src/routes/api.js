const express = require('express')
const routerAPI = express.Router()
const {
    getUserAPI,
    putUpdateUser,
    postUserAPI,
    deleteUserAPI,
    postUploadSingleFile,

} = require('../controllers/apiControllers')
const {
    postCreateCustomer
} = require('../controllers/customerController')
routerAPI.get('/demo', (req, res) => {
    res.status(200).json({
        data: 'thu'
    })
})
routerAPI.get('/users', getUserAPI)

routerAPI.post('/users', postUserAPI)
routerAPI.put('/users', putUpdateUser)
routerAPI.delete('/users', deleteUserAPI); // Đảm bảo route bao gồm :id

routerAPI.post('/file', postUploadSingleFile)


routerAPI.post('/customer', postCreateCustomer)



//route = route+ handler method

module.exports = routerAPI