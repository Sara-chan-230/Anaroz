const {Campaign} = require("../models/CampaignModel")
const asyncHandler = require("express-async-handler");


module.exports.getAllcompaign=asyncHandler(async(req, res)=>{
    const campaigns = await Campaign.find() ;
 
    if(!campaigns){
        return res.status(404).json({ message:"campaigns not found  "});
    }
    res.status(200).json(campaigns);
});
