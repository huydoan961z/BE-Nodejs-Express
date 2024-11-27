const connection = require('../config/database')
const {
    getAllUsers,
    getUserById
} = require('../services/CRUDservices')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    console.log(results)
    res.render('home.ejs', {
        listUser: results
    })

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

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    const user = await getUserById(userId)
    console.log(user)

    res.render('edit.ejs', {
        useredit: user[0]
    })
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;
    try {
        // add to database 
        let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
            [email, fname, city]
        );
        console.log('User created successfully:', results);
        res.send('User created successfully');
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Error creating user');
    }
};

const postUpdateUser = async (req, res) => {
    let userId = req.params.id;
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;
    try {
        // Update to database
        let [results, fields] = await connection.query(
            `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
            [email, fname, city, userId]
        );
        console.log('User updated successfully:', results);
        res.redirect('/')
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).send('Error updating user');
    }
}
const postListUser = (req, res) => {
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;
    console.log("Ten:", fname, "Email:", email, "City:", city);

    // add to database 
    connection.query(
        `SELECT * FROM Users U`,
        [email, fname, city],
        function (err, results) {
            if (err) {
                console.error('Error inserting user:', err);
                res.status(500).send('Error creating user');
                return;
            }
            console.log('User created successfully:', results);
            res.send('User created successfully');
        }
    );
};


module.exports = {
    getHomePage,
    getTestPage,
    getSampleEJSFile,
    getNavBar,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}