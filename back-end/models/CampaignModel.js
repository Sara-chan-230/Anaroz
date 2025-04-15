// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  wallet: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['disaster', 'emergency', 'health', 'education', 'environment','food','animals','rights','community','arts'], // Catégories possibles
    required: true,
  },
  max_volunteers: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL de l'image de la campagne
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organisation_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisation', // Référence à l'organisation
    required: true,
  },
  contributors: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  donors: [{
    donor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Donor', // Référence aux donateurs
    },
    contribution_amount: {
      type: Number,
    }
  }]
}, { timestamps: true });  // Ajoute les timestamps `createdAt` et `updatedAt`

// Créer le modèle à partir du schéma
const Campaign = mongoose.model('Compaigns', campaignSchema, 'Compaigns');

module.exports = Campaign;
