const getHomePage = (req, res) => {
    res.send('Helloasdasaaaaaaaaaada World!')

}
const getTestPage = (req, res) => {
    res.send('Hello Test World!')

}
const getSampleEJSFile = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomePage,
    getTestPage,
    getSampleEJSFile
}