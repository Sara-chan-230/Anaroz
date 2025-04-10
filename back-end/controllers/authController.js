const User = require('../models/UserModel'); // Assure-toi que le modèle est correct
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Exemple de fonction signup
exports.signup = (req, res) => {
  const { name, email, password, confirmPassword, phoneNumber, contribution } = req.body;

  // Vérifier si tous les champs sont présents
  if (!name || !email || !password || !confirmPassword || !phoneNumber || !contribution) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  // Vérification si les mots de passe correspondent
  if (password !== confirmPassword) {
      return res.status(400).json({ message: "Les mots de passe ne correspondent pas" });
  }

  // Vérification du choix de contribution
  if (contribution !== "supporter" && contribution !== "affected person") {
      return res.status(400).json({ message: "Choix de contribution invalide. Choisissez entre 'supporter' ou 'affected person'" });
  }

  // Créer l'utilisateur avec les informations reçues
  const user = {
      name,
      email,
      password,
      phoneNumber,
      contribution
  };

  // Sauvegarde dans la base de données si nécessaire

  // Réponse de succès
  res.status(201).json({ message: "Compte créé avec succès !" });
};
exports.signin = (req, res) => {
  const { email, password } = req.body;

  // Vérifier si les champs email et mot de passe sont fournis
  if (!email || !password) {
      return res.status(400).json({ message: "Email et mot de passe sont requis" });
  }

  // Rechercher l'utilisateur dans la base de données
  // Remplace ceci par une véritable requête à ta base de données pour vérifier l'utilisateur
  const user = getUserByEmail(email); // Simuler la récupération de l'utilisateur par email

  if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé" });
  }

  // Vérification du mot de passe (en comparant avec le mot de passe hashé dans la base de données)
  bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
          return res.status(500).json({ message: "Erreur lors de la comparaison des mots de passe" });
      }

      if (!isMatch) {
          return res.status(401).json({ message: "Mot de passe incorrect" });
      }

      // Générer un token JWT (si nécessaire pour l'authentification)
      const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });

      // Répondre avec un message de succès et le token
      res.status(200).json({
          message: "Connexion réussie",
          token: token // On renvoie le token pour les prochaines requêtes authentifiées
      });
  });
};