const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tonNomDeBaseDeDonnees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));
