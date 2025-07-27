const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // THIS ONLY WORKS ON CREATE AND SAVE
      // here we need regular function to use this
      validator: function (el) {
        // el is the passConfirm
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  passwordChangedAt: Date,
});

// use document middleware
// we need to encrypt the password before save it in the DB
userSchema.pre('save', async function (next) {
  // this refer to the user document
  // so if the password is not have been modified so return and jump to the next middleware
  if (!this.isModified('password')) return next();

  // else we need to hash the password [add random string to the password] before save it
  // hash => async to not block the rest of code
  this.password = await bcrypt.hash(this.password, 12);

  // also we need to delete the confirm password we don't need to save it to the DB
  // we used it in the auth controller  so we no longer need it
  this.passwordConfirm = undefined;

  // then call the next middleware in the stack
  next();
});

// function to unhash the password
// make an instance method [available for each documents in this model]
// we do it here because its related to the data of user itself
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  // because i set the password to be false => so its will not be available here using this keyword
  // so we will receive it using the candidatePassword
  return await bcrypt.compare(candidatePassword, userPassword);
};

// another instance method
// to check if the user change the password after login and the token is valid
userSchema.methods.changedPasswordAfter = async function (JWTTimestamp) {
  // console.log(this.passwordChangedAt, JWTTimestamp);

  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    // console.log(changedTimestamp, JWTTimestamp);
    // if we change the password after we make the token
    // so return true
    return JWTTimestamp < changedTimestamp; // 100 < 200
  }

  // false means not changes
  return false;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
