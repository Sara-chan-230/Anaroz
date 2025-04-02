const createAccount = (req, res) => {
    // Logique pour créer un compte
    // Par exemple, récupérer les données du body et les enregistrer dans la base de données
    const { username, email, password } = req.body;
  
    // Vérification basique (ajoute ici la logique pour enregistrer l'utilisateur)
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    }
  
    // Enregistrer l'utilisateur dans la base de données ici...
  
    res.status(201).json({ message: 'Compte créé avec succès' });
  };
  
  module.exports = { createAccount };
  