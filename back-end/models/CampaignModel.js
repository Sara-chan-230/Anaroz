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
    enum: ['disaster', 'emergency', 'health', 'education', 'environment'], // Catégories possibles
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
  contributions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contribution', // Référence aux contributions de la campagne
  }],
  donors: [{
    donor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Donor', // Référence aux donateurs
    },
    contribution_amount: {
      type: Number,
      required: true,
    }
  }]
}, { timestamps: true });  // Ajoute les timestamps `createdAt` et `updatedAt`

// Créer le modèle à partir du schéma
const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
