// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  age: { type: Number }, // Âge de l'utilisateur
  sexe: { type: String, enum: ['male', 'female'] }, // Sexe
  rule: { type: String, enum: ['supporter', 'affected person'] }, // Rôle de l'utilisateur
  skills: [{ type: String }], // Compétences sous forme de tableau
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  code_postal: { type: String, required: true },
  photo: { type: String }, // URL de la photo
  hope_piece: { type: Number } // Pièces d'espoir ou tout autre champ numérique
});

module.exports = mongoose.model('users', userSchema,'users');
