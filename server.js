//dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const session = require('express-session')
const bcrypt = require('bcrypt')
require('dotenv').config()

//port
const PORT = process.env.PORT || 3333

//database
const MONGODB_URI = process.env.MONGODB_URI

//fix deprectiation warnings
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//controllers//
//controller for users
const userController = require('./controllers/users_controller.js')
//specifying controller for wonders
const wondersController = require('./controllers/wonders.js')
//controller for sessions
const sessionsController = require('./controllers/sessions_controller.js')

//middleware//
//use public for static
app.use(express.static('public'))
//populates req.body with parsed info
app.use(express.urlencoded({extended: false}))
//method override
app.use(methodOverride('_method'))
//sessions path
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUnitialized: false
  })
)
//wonders controller and wonders path
app.use('/wonders', wondersController)
//users path and controller
app.use('/users', userController)

//sessions controller
app.use('/sessions', sessionsController)


//listener
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
})
