const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model("User");
const{JWT_KEYS} = require('../keys');

router.post('/signup', (req, res) => {
    const {name, email, password} = req.body
    if(!email || !name || !password){
        return res.status(422).json({error: "please add all the fields"})
    }
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return res.status(422).json({error: "please check the format of email"})
    }
    User.findOne({email: email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error: "user already registered!"})
        }
        bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                name,
                email,
                password: hashedPassword
            })
            user.save()
            .then(user => {
                res.json({message: "user registered successfully"})
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signin', (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        return res.status(422).json({error: "please add email or password"})
    }
    User.findOne({email: email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: "Invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then((doMatch) => {
            if(doMatch){
                const token = jwt.sign({_id: savedUser._id}, JWT_KEYS)
                const {_id, name, email} = savedUser;
                res.json({token, user:{_id, name, email}})
            }
            else {
                return res.status(422).json({error: "Invalid email or password"})
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router