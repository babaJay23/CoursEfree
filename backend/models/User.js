const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username:{
    require: true,
    type: String
  },
  email:{
    require: true,
    type: String
  },
  password:{
    require: true,
    type: String
  },
  date:{
    default: Date.now(),
    type: Date
  }

})

const User = mongoose.model('User', userSchema);

module.exports = User;