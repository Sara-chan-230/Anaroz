const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

// Middleware pour parser les données JSON
app.use(express.json());

// Utiliser la route d'authentification
app.use('/api/auth', authRoutes);

// Lancer le serveur
app.listen(5000, () => {
  console.log('Serveur actif sur http://localhost:5000');
});
