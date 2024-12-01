const connection = require('../config/database')
const Users = require('../models/users')

const {
    getAllUsers,
    getUserById
} = require('../services/CRUDservices')
const {
    name
} = require('ejs')

const getHomePage = async (req, res) => {
    let results = await Users.find({})
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
    const user = await Users.findById(userId)
    console.log(user)

    res.render('edit.ejs', {
        useredit: user
    })
}

const postCreateUser = async (req, res) => {
    //take info when user type and submit
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;

    await Users.create({
        //the left must be right compare to in module
        email: email,
        city: city,
        names: fname
    })
    res.send(' successfull ')

}

const postUpdateUser = async (req, res) => {
    let userId = req.params.id;
    let email = req.body.email;
    let fname = req.body.fname;
    let city = req.body.city;
    try {
        // Update to database
        let user = await Users.findByIdAndUpdate(userId, {
            names: fname,
            email: email,
            city: city
        }, {
            new: true
        })
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

const postDeleteUser = async (req, res) => {
    let userId = req.params.id;
    try {
        await Users.findByIdAndDelete(userId);
        console.log('User deleted successfully');
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Error deleting user');
    }
};


module.exports = {
    getHomePage,
    getTestPage,
    getSampleEJSFile,
    getNavBar,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser
}