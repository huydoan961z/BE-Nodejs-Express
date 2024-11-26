//http://localhost:3001/


const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const configViewEngine = require('./config/viewEngines')

const webRoutes = require('./routes/web')
const connection = require('./config/database')
console.log(process.env) //run the .env

//config template engine
configViewEngine(app);

//config static files
// take the img from static 


//TEST CONNECTION 

// Create the connection to database


// A simple SELECT query
var user = []
connection.query(
    'SELECT * FROM Users u ',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        user = results;
        console.log(JSON.stringify(user))
    }
)


//khai bao route o routes
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})