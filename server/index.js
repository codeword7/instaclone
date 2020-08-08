const express = require('express');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys')
require('./models/user')
require('./models/post')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const app = express();
const PORT = 5000;

app.use(express.json())
app.use(authRoutes)
app.use(postRoutes)
app.use(userRoutes)

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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