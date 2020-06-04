const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
      currentUser: req.session.currentUser
    })
})

sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
      if (err) {
        console.log(err);
        res.send('Sorry, an error occured! Please try again.')
      } else if (!foundUser) {
        res.send('Sorry, incorrect username or password')
      } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
              req.session.currentUser = foundUser
              res.redirect('/wonders')
            } else {
              res.send('Sorry, incorrect username or password')
            }
        }
    })
})

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/wonders')
    })
})

module.exports = sessions
