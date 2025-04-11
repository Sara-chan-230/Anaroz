const asyncHandler = require("express-async-handler");
const User = require('../models/UserModel'); // Assure-toi que le modèle est correct
const jwt = require('jsonwebtoken');

// Exemple de fonction signup
// controllers/authController.js

// Fonction d'inscription avec asyncHandler
exports.signup = asyncHandler(async (req, res) => {
  const { full_name, email, password, phone, rule, code_postal } = req.body;

  // Vérifier si tous les champs sont présents
 

  // Vérifier si l'email est déjà pris
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "Cet email est déjà utilisé" });
  }

  // Créer l'utilisateur
  const user = new User({
    full_name,
    email,
    password,
    phone,
    rule,
    code_postal,
    hope_piece: 0
  });

  // Sauvegarder l'utilisateur dans la base de données
  await user.save();

  // Réponse de succès
  res.status(201).json({ message: "Compte créé avec succès !" });
});

 
exports.signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Vérifier les champs requis
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe sont requis" });
  }

  // Recherche de l'utilisateur par email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Utilisateur non trouvé" });
  }

  // Vérifier le mot de passe sans hash
  if (user.password !== password) {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }

  // Connexion réussie — on renvoie toutes les infos de l'utilisateur
  res.status(200).json({
    message: "Connexion réussie",
    user: {
      _id: user._id,
      full_name: user.full_name,
      phone: user.phone,
      email: user.email,
      code_postal: user.code_postal,
      rule: user.rule,
      age: user.age,
      sexe: user.sexe,
      skills: user.skills,
      photo: user.photo,
      hope_piece: user.hope_piece
    }
  });
});
