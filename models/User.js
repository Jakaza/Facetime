const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 20,
    min: 3,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  profilePicture: {
    type: String,
    default: ""
  },
  coverPicture: {
    type: String,
    default: ""
  },
  followers:{
    type: Array,
    default: []
  },
  followins:{
    type: Array,
    default: []
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  description:{
    type: String,
    max: 50
  },
  city:{
    type: String,
    max: 100
  },
  homeTown:{
    type: String,
    max: 100
  },
  relationship: {
    type: Number,
    enum: [1,2,3]
  }
}, {
  timestamps: true
})


module.exports = mongoose.model('User', userSchema)