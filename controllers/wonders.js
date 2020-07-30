const express = require('express')
const router = express.Router()
const Wonder = require('../models/wonders.js')
const Original7 = require('../models/og7.js')
const sevenWonders = require('../seed/og7.js')
const newWonders = require('../seed/newwonders.js')


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
  //sorts the wonders in descending order so you can see who is winning
  // https://stackoverflow.com/questions/4299991/how-to-sort-in-mongoose
  //without the null it gives me property undefined
    Wonder.find({}, null, {sort: {votes: -1}}, (err, allWonders) => {
        res.render('index.ejs', {
          wonders: allWonders,
          currentUser: req.session.currentUser
        })
    })
})


router.get('/original', (req, res) => {
    Original7.find({}, (err, allWonders) => {
    res.render('7wonders/7wondersindex.ejs', {
      original7: allWonders,
      currentUser: req.session.currentUser
    })
  })
})

router.get('/original/:id', (req, res) => {
    Original7.findById(req.params.id, (err, foundWonder) => {
        res.render('7wonders/7wondersshow.ejs', {
            wonder: foundWonder,
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

//seed data for the original 7 wonders
// router.get('/original7/seed', (req, res) => {
//     Original7.create(sevenWonders)
//     res.redirect('/wonders')
// })



module.exports = router
