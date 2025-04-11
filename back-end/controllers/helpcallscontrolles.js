const HelpCall = require('../models/helpcallsModels');
const asyncHandler = require('express-async-handler');

// Créer un nouvel appel d'aide
exports.createHelpCall = asyncHandler(async (req, res) => {
    const {
      longitude,
      latitude,
      description,
      degree_of_danger,
      user_id,
      date
    } = req.body;
  
    // Validation des champs requis
    if (!longitude || !latitude || !description || !degree_of_danger || !user_id || !date) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires"
      });
    }
  
    // Vérification du degré de danger
    const validDegrees = ['low', 'moderate', 'high'];
    if (!validDegrees.includes(degree_of_danger)) {
      return res.status(400).json({
        success: false,
        message: "Degré de danger invalide"
      });
    }
  
    // Création du nouvel appel d'aide
    const newHelpCall = new HelpCall({
      longitude,
      latitude,
      description,
      degree_of_danger,
      user_id,
      date
    });
  
    // Sauvegarde en base de données
    await newHelpCall.save();
  
    // Réponse formatée
    res.status(201).json({
      success: true,
      data: {
        _id: newHelpCall._id,
        location: {
          longitude: newHelpCall.longitude,
          latitude: newHelpCall.latitude
        },
        description: newHelpCall.description,
        degree_of_danger: newHelpCall.degree_of_danger,
        user_id: newHelpCall.user_id,
        date: newHelpCall.date
      }
    });
  });
// Méthode pour récupérer tous les appels d'aide
exports.getAllHelpCalls = asyncHandler(async (req, res) => {
    // Récupérer tous les appels d'aide depuis la base de données
    const HelpCalls = await HelpCall.find();

    // Si aucun appel d'aide n'est trouvé, retourner un message
    if (HelpCalls.length === 0) {
        return res.status(404).json({ message: "Aucun appel à l'aide trouvé" });
    }

    // Si des appels d'aide sont trouvés, les retourner
    res.status(200).json({ HelpCalls });
});
