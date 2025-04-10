// routes/campaignRoutes.js
const express = require('express');
const router = express.Router();
const {getAllcompaign} = require('../controllers/CompaignController');

router.get('/campaigns', getAllcompaign);

module.exports = router;
