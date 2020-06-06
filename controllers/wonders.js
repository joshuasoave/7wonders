const express = require('express')
const router = express.Router()
const Wonder = require('../models/wonders.js')

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

//routes
//local host
router.get('/', isAuthenticated, (req, res) => {
    Wonder.find({}, (err, allWonders) => {
        res.render('index.ejs', {
          wonders: allWonders,
          currentUser: req.session.currentUser
        })
    })
})

router.get('/new', isAuthenticated, (req, res) => {
    res.render('new.ejs', {
      currentUser: req.session.currentUser
    })
})

router.post('/new', (req, res) => {
    Wonder.create(req.body, (err, newWonder) => {
        res.redirect('/wonders')
    })
})

router.get('/:id/edit', isAuthenticated, (req, res) => {
    Wonder.findById(req.params.id, (err, foundWonder) => {
        res.render('edit.ejs', {
          wonder: foundWonder,
          currentUser: req.session.currentUser
        })
    })
})

router.put('/:id/vote', isAuthenticated, (req, res) => {
    Wonder.findByIdAndUpdate(req.params.id,
      //increments the number of votes for found id by 1
      {$inc: {'votes': + 1}},
      (err, foundWonder) => {
        //send back to index
        res.redirect('/wonders/')
    })
})

router.put('/:id', (req, res) => {
    Wonder.findByIdAndUpdate(req.params.id, req.body, (err, updatedWonder) => {
      res.redirect('/wonders')
    })
})

router.delete('/:id', (req, res) => {
    Wonder.findByIdAndRemove(req.params.id, (err, wonder) => {
        res.redirect('/wonders')
    })
})

router.get('/:id', isAuthenticated, (req, res) => {
    Wonder.findById(req.params.id, (err, foundWonder) => {
        res.render('show.ejs', {
            wonder: foundWonder,
            currentUser: req.session.currentUser
        })
    })
})

module.exports = router
