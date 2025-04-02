const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes'); // Importe tes routes

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Utilise la route d'authentification
app.use('/api/auth', authRoutes);

// Route de test
app.get("/", (req, res) => {
  res.send("API en fonctionnement !");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
 