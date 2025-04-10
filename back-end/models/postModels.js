const mongoose = require('mongoose');

// Schéma des commentaires
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à un utilisateur
  timestamp: { type: Date, default: Date.now }
});

// Schéma des posts
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  photo: { 
    type: String, 
    default: 'https://res.cloudinary.com/dmtdx7edd/image/upload/v1744239540/36d3e0af-70be-4199-a634-bf7fccb1d4d0.png' 
  },
  type: {
    type: String,
    enum: ['memo', 'event', 'news', 'story'], // Valeurs autorisées
    required: true
  },
  date: { type: Date, default: Date.now },
  liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Tableau d'IDs d'utilisateurs qui ont aimé le post
  comments: [commentSchema], // Tableau de commentaires
  organisation_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Organisation', // Référence à une organisation
    required: true
  }
});

module.exports = mongoose.model('posts', postSchema, 'Posts');