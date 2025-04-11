const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 
const helpCallRoutes = require('./routes/helpcallRoutes'); // Importer les routes d'appels d'aide
const postRoutes = require('./routes/postRoutes'); // Ajouter les routes des posts
const campaignRoutes = require('./routes/campaingnRoutes');
const authOrgRoutes = require('./routes/organisationRoutes');
const donationRoutes = require('./routes/donnationRoutes'); // ← Chemin correct vers ton fichier
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://hibaelharda:3!-6avQEC6_Dmeb@cluster0.oyiqovf.mongodb.net/Anarozz?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("Connexion à MongoDB réussie 1111!"))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/help_calls', helpCallRoutes);  // Changer HelpCalls en help_calls ici
app.use('/api/posts', postRoutes);
app.use('/api/compaigns', campaignRoutes); // Exemple : http://localhost:3000/api/compaigns
app.use('/api/organisations', authOrgRoutes);
app.use('/api/donations', donationRoutes); // 👈 Ceci est important !
// Ajouter la route pour les posts
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
