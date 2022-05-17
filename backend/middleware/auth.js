const Validator = require('express-validator');
const isEmpty = require('is-empty');


// VALIDATE LOGIN
const validateUserOnLogin = (data) =>{

  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : ""



  // email input check
  if(Validator.isEmpty(data.email)){
    errors.email = "Email is required!"
  }else if(!Validator.isEmpty(data.email)){
    errors.email = "Email is Invalid!"
  }

  // password check

  if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required!"
  }

  return{
    errors,
    isValid: isEmpty(errors)
  };
};

// VALIDATE REGISTER
const validateUserOnRegister = (data) =>{

  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""


  // username check

  if(Validator.isEmpty(data.username)){
    errors.username = "Username is required!"
  }

  // email input check
  if(Validator.isEmpty(data.email)){
    errors.email = "Email is required!"
  }else if(!Validator.isEmpty(data.email)){
    errors.email = "Email is Invalid!"
  }

  // password check

  if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required!"
  }

  // password check

  if(Validator.isEmpty(data.password2)){
    errors.password2 = "Please confirm your password!"
  }

  // password check

  if(!Validator.isLength(data.password, {min:6,max:30})){
    errors.password = "Password must be at least 6 characters!"
  }

  // password check

  if(Validator.equals(data.password, data.password2)){
    errors.password2 = "Passwords must match!"
  }

  return{
    errors,
    isValid: isEmpty(errors)
  };
};


module.exports = validateUserOnLogin;
module.exports = validateUserOnRegister;