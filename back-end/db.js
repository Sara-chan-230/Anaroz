const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/anarozDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connexion à MongoDB réussie');
  } catch (err) {
    console.error('❌ Erreur de connexion à MongoDB :', err.message);
    process.exit(1);
  }
};

// Exporter la fonction pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = connectDB;
