
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  preferences: {
    localization: {
      language: { type: String },
      time_zone: { type: String },
      currency: { type: String },
    },
    privacy: {
      profile_visibility: { type: String, enum: ['everyone', 'private'] },
      messages: { type: String, enum: ['everyone', 'people_you_follow', 'private'] },
    },
    content: {
      category_lists: { type: String, enum: ['enable', 'disable'] },
    },
  },
}, {
  versionKey: false,
  strict: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

userSchema.methods.generateHash = password =>
  (bcrypt.hashSync(password, bcrypt.genSaltSync(8), null));

userSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
