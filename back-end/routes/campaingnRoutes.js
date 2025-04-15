// routes/campaignRoutes.js
const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/CompaignController');

router.get('/', campaignController.getAllCampaigns);
router.post('/', campaignController.createCampaign); // Nouvelle route pour la création
router.get('/organisation/:organisationId', campaignController.getCampaignsByOrganisation);
router.get('/:id', campaignController.findCampaignById);
module.exports = router;
