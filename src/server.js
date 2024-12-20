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
const {
    MongoClient
} = require('mongodb');

console.log(process.env); // Run the .env

// Config template engine
configViewEngine(app);

// Config file upload
app.use(fileUpload());

// Config req.body
app.use(express.json()); // For JSON
app.use(express.urlencoded({
    extended: true
})); // For form data

// Use API routes
app.use('/v1/', routerAPI);

// Khai bao route o routes
app.use('/', webRoutes);

// Example usage of Kitten model
const saveKitten = async () => {
    const cat = new Kitten({
        name: 'Silence'
    });
    try {
        await cat.save();
        console.log('Kitten saved');
    } catch (err) {
        console.error('Error saving kitten:', err);
    }
};

// using mongoose
const connectMongoose = async () => {
    try {
        await connectToDatabase();
        console.log('Connected to DB successfully using mongoose');
        await saveKitten();
    } catch (err) {
        console.error('Error connecting to DB using mongoose:', err);
    }
};

// using mongo db driver
const connectMongoDriver = async () => {
    const url = process.env.DB_Host_WithDriver;
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected successfully to server using MongoDB driver');

        const dbName = process.env.DB_NAME;
        const db = client.db(dbName);
        const collection = db.collection('customers');

        await collection.insertOne({
            name: "aaa",
            email: "aaaa",
            address: {
                provice: "aaa",
                code: "aaa"
            }

        });
        console.log('Document inserted');

        const customer = await collection.findOne({
            name: "aaa",
            address: {
                provice: "aaa",
                code: "aaa"
            }
        });
        if (customer != null)
            console.log("find it", customer)
        else
            console.log("not found")

    } catch (err) {
        console.error('Error connecting to server using MongoDB driver:', err);
    } finally {
        await client.close();
    }
};

const startServer = async () => {
    await connectMongoose();
    //await connectMongoDriver();

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};

startServer();