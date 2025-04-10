const mongoose = require('mongoose');

const helpCallSchema = new mongoose.Schema({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  description: { type: String, required: true },
  degree_of_danger: { 
    type: String, 
    enum: ['low', 'moderate', 'high'], 
    required: true 
  },
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users', 
    required: true 
  },
  date: { type: String, required: true } // ou type: Date si tu veux gérer les vraies dates
});

module.exports = mongoose.model('help_calls', helpCallSchema,'Help_calls');
