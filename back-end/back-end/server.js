const express = require('express');
const connectDB = require('./db'); // Importation de la fonction de connexion

require('dotenv').config(); // Charge les variables d'environnement

const app = express();
connectDB(); // Appel de la fonction pour connecter MongoDB

app.listen(5000, () => {
    console.log('🚀 Serveur démarré sur le port 5000');
});
