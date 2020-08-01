const express = require('express');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys')
const app = express();
const PORT = 5000;

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('mongo db connected')
})
mongoose.connection.on('error', (err) => {
    console.log('mongo db error occured', err)
})

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log('app listening on', PORT)
})