const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route de création de compte
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;
