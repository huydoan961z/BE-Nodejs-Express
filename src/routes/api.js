const express = require('express')
const routerAPI = express.Router()
const {
    getUserAPI,
    putUpdateUser,
    postUserAPI,
    deleteUserAPI,
    postUploadSingleFile

} = require('../controllers/apiControllers')
const {
    postCreateCustomer,
    postCreateArrayCustomer,
    postGetAllCustomer,
    putUpdateCustomer,
    deleteCustomer,
    deleteArrayCustomer
} = require('../controllers/customerController')

const {
    postCreateProject,
    getAllProject,
    deleteProject,
    updateProject,
    removeArrSubController,
    removeSingleSubController
} = require('../controllers/projectController')

const {
    postCreateTask,
    updateTask,
    deleteTask,
    getAllTask

} = require('../controllers/taskController')

const {
    postUserReact,
    getUserReact,
    updateUserReact,
    deleteUserReact
} = require('../controllers/userReactController')
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
routerAPI.post('/customers-many', postCreateArrayCustomer)

routerAPI.get('/customer', postGetAllCustomer)
routerAPI.put('/customer', putUpdateCustomer)
routerAPI.delete('/customer', deleteCustomer)
routerAPI.delete('/customer-many', deleteArrayCustomer)

// project
routerAPI.post('/project', postCreateProject)

routerAPI.get('/project', getAllProject)
routerAPI.delete('/project', deleteProject)
routerAPI.put('/project/s', removeArrSubController)
routerAPI.put('/project/ss', removeSingleSubController)


// task
routerAPI.post('/task', postCreateTask)
routerAPI.put('/task', updateTask)
routerAPI.delete('/task', deleteTask)
routerAPI.get('/task', getAllTask)


//userreact
routerAPI.post('/user/react', postUserReact)
routerAPI.get('/user/react/', getUserReact);
routerAPI.put('/user/react/', updateUserReact);
routerAPI.delete('/user/react/', deleteUserReact);



routerAPI.put('/project', updateProject)
// for query string
routerAPI.get('/get', (req, res) => {
    console.log(req.query)
    return res.status(200).json({
        EC: 0,
        data: req.query
    })
})
// truyen dong khi truyen it data, 
routerAPI.get('/get/:name/:address', (req, res) => {
    console.log(req.params)
    return res.status(200).json({
        EC: 0,
        data: req.params
    })
})


//route = route+ handler method

module.exports = routerAPI