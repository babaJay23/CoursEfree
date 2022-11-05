const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username:{
    required: true,
    type: String,
    unique: true
  },
  email:{
    required: true,
    type: String,
    unique: true
  },
  password:{
    required: true,
    type: String,
    unique: true
  },
  category:{
    type: String,
    required: true,
    unique: true
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;