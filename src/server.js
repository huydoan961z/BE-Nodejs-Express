//http://localhost:3001/


const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const configViewEngine = require('./config/viewEngines')
const Kitten = require('./models/Kittens')

const webRoutes = require('./routes/web')
const routerAPI = require('./routes/api')
const connection = require('./config/database')
const {
    name
} = require('ejs')

console.log(process.env) //run the .env

//config template engine
configViewEngine(app);

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({
    extended: true
})) // for data form


app.use('/v1/', routerAPI)
const cat = new Kitten({
    name: 'Silence',
    name: 'Huy doan ',
});



cat.save();

//call the function


connection();



//khai bao route o routes
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})