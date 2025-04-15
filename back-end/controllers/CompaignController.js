const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Campaign = require('../models/CampaignModel');
exports.getCampaignsByOrganisation = asyncHandler(async (req, res) => {
  const { organisationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(organisationId)) {
    return res.status(400).json({ 
      success: false,
      message: "ID d'organisation invalide" 
    });
  }

  const campaigns = await Campaign.find({ organisation_id: organisationId })
    .populate('organisation_id', 'name logo'); // Optionnel: peupler les données de l'organisation

  if (campaigns.length === 0) {
    return res.status(404).json({ 
      success: false,
      message: "Aucune campagne trouvée pour cette organisation" 
    });
  }

  res.status(200).json(campaigns);
});

// Créer une nouvelle campagne
exports.createCampaign = asyncHandler(async (req, res) => {
  const {
    title,
    budget,
    wallet,
    category,
    max_volunteers,
    image,
    description,
    organisation_id
  } = req.body;

  // Validation des champs requis
  if (!title || !budget || !category || !max_volunteers || !image || !description || !organisation_id) {
    return res.status(400).json({ message: "Tous les champs obligatoires sont requis" });
  }

  // Créer la campagne
  const campaign = new Campaign({
    title,
    budget,
    wallet: wallet || 0, // Valeur par défaut si non fournie
    category,
    max_volunteers,
    image,
    description,
    organisation_id,
    contributions: [],
    donors: []
  });

  // Sauvegarder dans la base de données
  await campaign.save();

  res.status(201).json({
    message: "Campagne créée avec succès",
    campaign: {
      _id: campaign._id,
      title: campaign.title,
      budget: campaign.budget,
      category: campaign.category
    }
  });
});

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Trouver une campagne par ID
exports.findCampaignById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ 
      success: false,
      message: "ID de campagne invalide" 
    });
  }

  const campaign = await Campaign.findById(id)
    .populate('organisation_id', 'name logo'); // Peupler l'organisation si nécessaire

  if (!campaign) {
    return res.status(404).json({ 
      success: false,
      message: "Campagne non trouvée" 
    });
  }

  res.status(200).json(campaign);
});
