
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  preferences: {
    localization: {
      language: { type: String, default: null },
      time_zone: { type: String, default: null },
      currency: { type: String, default: null },
    },
    privacy: {
      profile_visibility: {
        type: String,
        enum: ['everyone', 'private'],
        default: 'everyone',
      },
      messages: {
        type: String,
        enum: ['everyone', 'people_you_follow', 'no_one'],
        default: 'people_you_follow',
      },
    },
    content: {
      category_lists: { type: String, enum: ['enable', 'disable'], default: 'enable' },
    },
  },
}, {
  versionKey: false,
  strict: true,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

userSchema.methods.generateHash = password =>
  (bcrypt.hashSync(password, bcrypt.genSaltSync(8), null));

userSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
