const express = require('express')
const router = express.Router()
const Wonder = require('../models/wonders.js')

//routes
//local host
router.get('/', (req, res) => {
    Wonder.find({}, (err, allWonders) => {
        res.render('index.ejs', {
          wonders: allWonders,
          currentUser: req.session.currentUser
        })
    })
})

router.get('/new', (req, res) => {
    res.render('new.ejs', {
      currentUser: req.session.currentUser
    })
})

router.post('/new', (req, res) => {
    Wonder.create(req.body, (err, newWonder) => {
        res.redirect('/wonders')
    })
})

router.get('/:id/edit', (req, res) => {
    Wonder.findById(req.params.id, (err, foundWonder) => {
        res.render('edit.ejs', {
          wonder: foundWonder,
          currentUser: req.session.currentUser
        })
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

router.get('/:id', (req, res) => {
    Wonder.findById(req.params.id, (err, foundWonder) => {
        res.render('show.ejs', {
            wonder: foundWonder,
            currentUser: req.session.currentUser
        })
    })
})

module.exports = router
