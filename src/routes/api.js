const express = require('express')
const routerAPI = express.Router()
const {
    getUserAPI,
    putUpdateUser,
    postUserAPI,
    deleteUserAPI
} = require('../controllers/apiControllers')
routerAPI.get('/demo', (req, res) => {
    res.status(200).json({
        data: 'thu'
    })
})
routerAPI.get('/users', getUserAPI)

routerAPI.post('/users', postUserAPI)
routerAPI.put('/users', putUpdateUser)
routerAPI.delete('/users', deleteUserAPI); // Đảm bảo route bao gồm :id





//route = route+ handler method

module.exports = routerAPI