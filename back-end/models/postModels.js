
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  type: {
    type: String,
    enum: ['memo', 'event', 'news', 'story'], // Valeurs autorisées
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Post', postSchema);
