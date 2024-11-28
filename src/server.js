//http://localhost:3001/


const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const configViewEngine = require('./config/viewEngines')
const mongoose = require('mongoose');
const webRoutes = require('./routes/web')
const connection = require('./config/database')

console.log(process.env) //run the .env

//config template engine
configViewEngine(app);

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({
    extended: true
})) // for data form

//create the db to see in mongodb compass
const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const cat = new Kitten({
    name: 'Silence'
});

cat.save();

//call the function


connection();



//khai bao route o routes
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})