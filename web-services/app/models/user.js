// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

// set up a mongoose model and pass it using module.exports
const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  preferences: {
    localization: {
      language: { type: String },
      time_zone: { type: String },
      currency: { type: String },
    },
  },
  privacy: {
    profile_visibility: { type: String },
    messages: { type: String },
  },
  content: {
    category_lists: { type: String },
  },
}, {
  versionKey: false,
  strict: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

userSchema.methods.generateHash = function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
