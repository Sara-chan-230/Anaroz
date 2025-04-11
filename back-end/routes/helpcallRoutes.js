const express = require('express');
const router = express.Router();
const helpCallController = require('../controllers/helpcallscontrolles');

// Route pour récupérer tous les appels d'aide
router.get('/', helpCallController.getAllHelpCalls);
router.post('/', helpCallController.createHelpCall);

module.exports = router;
