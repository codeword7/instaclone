const express = require('express');
const mongoose = require('mongoose');
const {MONGOURI} = require('./config/keys')
require('./models/user')
require('./models/post')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const app = express();
const PORT = process.env.PORT || 5000;

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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log('app listening on', PORT)
})