const express = require('express')
const router = express.Router()
const {
    getHomePage,
    getTestPage,
    getSampleEJSFile,
    getNavBar,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
} = require('../controllers/homeControllers')

//route = route+ handler method
router.get('/', getHomePage)

// router.get('/ejs', (req, res) => {
//     res.render('sample.ejs')
// })
router.get('/ejs', getSampleEJSFile)

router.get('/test', getTestPage)

router.get('/getnavbar', getNavBar)

router.post('/create-user', postCreateUser)

router.get('/create', getCreatePage)

router.post('/update-user/:id', postUpdateUser)

router.get('/update/:id', getUpdatePage) // dinh nghia la id nen ben homecontroller no ten id 



module.exports = router