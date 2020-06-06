const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wonderSchema = new Schema({
      name: {type: String, required: true},
      location: {type: String, required: true},
      year: String,
      description: String,
      img: String,
      votes: {type: Number, default: 0}
})

const Wonder = mongoose.model('Wonder', wonderSchema)

module.exports = Wonder
