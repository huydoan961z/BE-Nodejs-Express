//http://localhost:3001/
const express = require('express')
const path = require('path')
const app = express()
const port = 3001

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
    res.send('Helloasdasaaaaaaaaaada World!')
})

app.get('/ejs', (req, res) => {
    res.render('sample.ejs')
})

app.get('/test', (req, res) => {
    res.send('Hellssso World test again!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})