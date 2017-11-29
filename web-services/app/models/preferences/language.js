const mongoose = require('mongoose');

const { Schema } = mongoose;
const languageSchema = new Schema({
  id: { type: String, required: true, index: { unique: true } },
  text: { type: String, required: true },
}, {
  versionKey: false,
  strict: false,
});

module.exports = mongoose.model('Language', languageSchema);
