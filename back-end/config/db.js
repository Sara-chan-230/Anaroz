const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error('L\'URI de MongoDB est manquante dans les variables d\'environnement');
            process.exit(1);  // Arrête l'exécution du serveur si l'URI est manquante
        }

        console.log('Tentative de connexion à MongoDB...');
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connexion à la base de données réussie');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        process.exit(1);  // Arrête l'exécution du serveur si la connexion échoue
    }
};

module.exports = connectDB;
