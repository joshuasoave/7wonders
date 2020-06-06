const mongoose = require('mongoose')
const Schema = mongoose.Schema

const originalSchema = new Schema({
      name: {type: String, required: true},
      location: {type: String, required: true},
      year: String,
      description: String,
      img: String,
})

const Original7 = mongoose.model('Original7', originalSchema)

module.exports = Original7
