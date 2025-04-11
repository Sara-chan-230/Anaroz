const asyncHandler = require('express-async-handler');
exports.getPostsByOrganisation = asyncHandler(async (req, res) => {
  const { organisationId } = req.params;

  if (!organisationId) {
    return res.status(400).json({ 
      success: false,
      message: "ID d'organisation manquant" 
    });
  }

  const posts = await Post.find({ organisation_id: organisationId });

  if (posts.length === 0) {
    return res.status(404).json({ 
      success: false,
      message: "Aucun post trouvé pour cette organisation" 
    });
  }

  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
});

const Post = require('../models/postModels');
// Créer un nouveau post
exports.createPost = asyncHandler(async (req, res) => {
  const { 
    title, 
    content, 
    type, 
    organisation_id,
    photo 
  } = req.body;

  // Validation des champs requis
  if (!title || !content || !type || !organisation_id) {
    return res.status(400).json({ 
      success: false,
      message: "Title, content, type et organisation_id sont obligatoires" 
    });
  }

  // Vérification du type valide
  const validTypes = ['memo', 'event', 'news', 'story'];
  if (!validTypes.includes(type)) {
    return res.status(400).json({
      success: false,
      message: "Type de post invalide"
    });
  }

  // Création du post
  const newPost = new Post({
    title,
    content,
    photo: photo || 'https://res.cloudinary.com/dmtdx7edd/image/upload/v1744239540/36d3e0af-70be-4199-a634-bf7fccb1d4d0.png',
    type,
    organisation_id,
    liked_by: [],
    comments: []
  });

  // Sauvegarde en base
  await newPost.save();

  // Réponse formatée
  res.status(201).json({
    success: true,
    data: {
      _id: newPost._id,
      title: newPost.title,
      type: newPost.type,
      organisation_id: newPost.organisation_id,
      createdAt: newPost.date
    }
  });
});
exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});
