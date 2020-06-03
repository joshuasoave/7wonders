const express = require('express')
const router = express.Router()
const Wonder = require('../models/wonders.js')

//routes
//local host
router.get('/', (req, res) => {
    Wonder.find({}, (err, allWonders) => {
        res.render('index.ejs', {
          wonders: allWonders
        })
    })
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.post('/new', (req, res) => {
    Wonder.create(req.body, (err, newWonder) => {
        res.redirect('/wonders')
    })
})

module.exports = router
