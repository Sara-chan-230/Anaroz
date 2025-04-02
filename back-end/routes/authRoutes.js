const express = require('express');
const router = express.Router();
const { createAccount } = require('../controllers/authController');

// Route pour la création d'un compte
router.post('/createAccount', createAccount);

module.exports = router;
