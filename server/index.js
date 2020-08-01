const express = require('express');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys')
require('./models/user')
const authRoutes = require('./routes/auth')
const app = express();
const PORT = 5000;

app.use(express.json())
app.use(authRoutes)

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

app.listen(PORT, () => {
    console.log('app listening on', PORT)
})