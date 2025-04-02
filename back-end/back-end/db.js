const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables d'environnement depuis .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ MongoDB connecté avec succès');
    } catch (error) {
        console.error('❌ Erreur de connexion à MongoDB :', error.message);
        process.exit(1); // Arrête l'application en cas d'erreur
    }
};

module.exports = connectDB;
