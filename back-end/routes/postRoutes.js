// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

// Route pour récupérer tous les posts
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost); // Nouvelle route pour la création
router.get('/organisation/:organisationId', postController.getPostsByOrganisation);

module.exports = router;
