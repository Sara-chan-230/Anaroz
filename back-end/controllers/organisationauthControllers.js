const asyncHandler = require("express-async-handler");
const Organisation = require('../models/organisationModels');

 
// Connexion d'une organisation
exports.signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe sont requis" });
  }

  // Recherche
  const organisation = await Organisation.findOne({ email });

  if (!organisation) {
    return res.status(401).json({ message: "Organisation non trouvée" });
  }

  // Vérification mot de passe (version non hashée)
  if (organisation.password !== password) {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }

  // Réponse réussie
  res.status(200).json({
    message: "Connexion réussie",
    organisation: {
      _id: organisation._id,
      name: organisation.name,
      email: organisation.email,
      logo: organisation.logo,
      phone: organisation.phone,
      description: organisation.description
    }
  });
});