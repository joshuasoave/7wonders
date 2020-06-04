const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res) => {
    res.render('users/new.ejs', {
      currentUser: req.session.currentUser
    })
})

users.post('/', (req, res, next) => {
    //check to see if username is already existing
    User.findOne({username: req.body.username}, (err, foundUser) => {
      if(foundUser) {
        res.send('This username is already taken')
      } else {
        //use a hashed password for the users password
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        User.create(req.body, (err, createdUser) => {
            console.log('user is created', createdUser)
            res.redirect('/wonders')
        })
      }
    })
})

module.exports = users
