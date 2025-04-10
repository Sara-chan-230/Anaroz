const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, default: '' },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  description: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model('organisations', organisationSchema,'Organisations');
