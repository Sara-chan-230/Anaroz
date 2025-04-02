const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://192.168.1.100:27017/anaroz_db", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connexion à MongoDB réussie !");
    } catch (error) {
        console.error("❌ Erreur de connexion à MongoDB :", error);
        process.exit(1); // Arrête le serveur en cas d'erreur
    }
};

module.exports = connectDB;
