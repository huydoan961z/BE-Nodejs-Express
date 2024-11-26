const connection = require('../config/database')


const getHomePage = (req, res) => {
    res.send('Helloasdasaaaaaaaaaada World!')

    var user = [];
    connection.query(
        'SELECT * FROM Users u ',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            user = results;
            console.log('user', JSON.stringify(user));
        }
    )

}
const getTestPage = (req, res) => {
    res.send('Hello Test World!')

}
const getSampleEJSFile = (req, res) => {
    res.render('sample.ejs')
}
const getNavBar = (req, res) => {
    res.render('home.ejs')
}

const postCreateUser = (req, res) => {
    res.send('aaaaaaa')
}


module.exports = {
    getHomePage,
    getTestPage,
    getSampleEJSFile,
    getNavBar,
    postCreateUser
}