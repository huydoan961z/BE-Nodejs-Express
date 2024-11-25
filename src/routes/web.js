const express = require('express')
const router = express.Router()
const {
    getHomePage,
    getTestPage,
    getSampleEJSFile
} = require('../controllers/homeControllers')

//route = route+ handler method
router.get('/', getHomePage)

// router.get('/ejs', (req, res) => {
//     res.render('sample.ejs')
// })
router.get('/ejs', getSampleEJSFile)

router.get('/test', getTestPage)


module.exports = router