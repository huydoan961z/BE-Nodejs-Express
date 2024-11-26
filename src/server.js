//http://localhost:3001/
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const configViewEngine = require('./config/viewEngines')

const webRoutes = require('./routes/web')

const mysql = require('mysql2')
console.log(process.env) //run the .env

//config template engine
configViewEngine(app);

//config static files
// take the img from static 


//TEST CONNECTION 

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});

// A simple SELECT query
try {
    const [results, fields] = connection.query(
        'SELECT * FROM Users u '
    );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
    console.log(err);
}


//khai bao route o routes
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})