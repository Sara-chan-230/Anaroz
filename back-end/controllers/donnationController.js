const asyncHandler = require("express-async-handler");
const Campaign = require('../models/CampaignModel');
const User = require('../models/UserModel');

// Donate function
const donate = asyncHandler(async (req, res) => {
    const { userId, campaignId, numberOfHopePieces } = req.body;
  
    const user = await User.findById(userId);
    const campaign = await Campaign.findById(campaignId);
  
    if (!user || !campaign) {
      return res.status(404).json({ message: 'User or campaign not found' });
    }
  
    if (user.hope_piece < numberOfHopePieces) {
      return res.status(400).json({ message: 'Not enough hope pieces to donate' });
    }
  
    // Déduire les hope_piece de l'utilisateur
    user.hope_piece -= numberOfHopePieces;
    await user.save();
  
    // Ajouter au portefeuille de la campagne
    campaign.wallet += numberOfHopePieces;
  
    // Ajouter le donateur avec montant
    campaign.donors.push({
      donor_id: user._id,
      contribution_amount: numberOfHopePieces
    });
  
    await campaign.save();
  
    res.status(200).json({ message: 'Donation successful' });
  });
  

 
 
// Function for volunteering
// Function for volunteering
const volunteer = asyncHandler(async (req, res) => {
  const { userId, campaignId } = req.body;

  if (!userId || !campaignId) {
    return res.status(400).json({ message: "User ID and Campaign ID are required" });
  }

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  const campaign = await Campaign.findById(campaignId);
  if (!campaign) return res.status(404).json({ message: "Campaign not found" });

  // Vérifie s’il est déjà volontaire
  if (campaign.contributors.includes(userId)) {
    return res.status(400).json({ message: "You are already volunteering for this campaign" });
  }

  // Vérifie si on a atteint le nombre max de volontaires
  if (campaign.contributors.length >= campaign.max_volunteers) {
    return res.status(400).json({ message: "Volunteer limit reached for this campaign" });
  }

  campaign.contributors.push(userId);
  await campaign.save();

  res.status(200).json({ message: "You have successfully volunteered for this campaign" });
});
module.exports = {
  donate, 
  volunteer
};
