const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // adapte le chemin si besoin

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://hibaelharda:3!-6avQEC6_Dmeb@cluster0.oyiqovf.mongodb.net/Anarozz?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("Connexion à MongoDB réussie 1111!"))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
const Posts = require('./models/CampaignModel'); // Vérifie que le chemin est correct
// Route pour récupérer tous les posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Posts.find(); // récupère tous les documents de la collection
    console.log(posts); // juste pour vérifier dans la console
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

