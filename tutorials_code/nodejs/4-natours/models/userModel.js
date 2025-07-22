const mongoose = require('mongoose');
const validator = require('validator');

// creating a schema for users
const userSchema = new mongoose.Schema({
  // First object for Schema Definition
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
  },
});

// creating a model from this schema
const User = mongoose.model('User', userSchema);

// export it to use out (for example in userController)
module.exports = User;
