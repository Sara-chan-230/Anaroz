const express = require('express');
const router = express.Router();
const { donate ,volunteer} = require('../controllers/donnationController');

router.post('/donate', donate);
router.post('/volunteer', volunteer);
module.exports = router;
