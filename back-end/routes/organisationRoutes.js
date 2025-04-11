const express = require('express');
const router = express.Router();
const authOrgController = require('../controllers/organisationauthControllers');

router.post('/signin', authOrgController.signin); // Pas de slash final

module.exports = router;