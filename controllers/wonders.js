const express = require('express')
const router = express.Router()

//routes
//local host
router.get('/', (req, res) => {
    res.send('Hello world')
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.post('/new', (req, res) => {
    res.send(req.body)
})

module.exports = router
