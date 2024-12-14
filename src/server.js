// //http://localhost:3001/


// const express = require('express')
// const path = require('path')
// const app = express()
// const port = process.env.PORT || 3001
// const configViewEngine = require('./config/viewEngines')
// const Kitten = require('./models/Kittens')
// const fileUpload = require('express-fileupload')
// const webRoutes = require('./routes/web')
// const routerAPI = require('./routes/api')
// const connection = require('./config/database')
// const {
//     name
// } = require('ejs')

// console.log(process.env) //run the .env

// // config file upload
// app.use(fileUpload)

// //config template engine
// configViewEngine(app);

// //config req.body
// app.use(express.json()) //for json
// app.use(express.urlencoded({
//     extended: true
// })) // for data form


// app.use('/v1/', routerAPI)
// const cat = new Kitten({
//     name: 'Silence',
//     name: 'Huy doan ',
// });



// cat.save();

// //call the function


// connection();



// //khai bao route o routes
// app.use('/', webRoutes)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const configViewEngine = require('./config/viewEngines');
const Kitten = require('./models/Kittens');
const fileUpload = require('express-fileupload');
const webRoutes = require('./routes/web');
const routerAPI = require('./routes/api');
const connectToDatabase = require('./config/database');

console.log(process.env); // Run the .env

// Call the function to connect to the database
connectToDatabase().then(() => {
    console.log('Connected to DB successfully');
}).catch(err => {
    console.error('Error connecting to DB:', err);
});

// Config template engine
configViewEngine(app);

// Config req.body
app.use(express.json()); // For JSON
app.use(express.urlencoded({
    extended: true
})); // For form data

// Config file upload
app.use(fileUpload());

// Use API routes
app.use('/v1/', routerAPI);

// Khai bao route o routes
app.use('/', webRoutes);

// Example usage of Kitten model
const cat = new Kitten({
    name: 'Silence'
});

cat.save().then(() => console.log('Kitten saved')).catch(err => console.error('Error saving kitten:', err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});