//dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
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

//middleware
//use public for static
app.use(express.static('public'))

//populates req.body with parsed info
app.use(express.urlencoded({extended: false}))
//method override
app.use(methodOverride('_method'))

//routes
//local host
app.get('/', (req, res) => {
    res.send('Hello world')
})

//listener
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
})
