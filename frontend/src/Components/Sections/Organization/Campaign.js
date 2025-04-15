import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import AboutCampaign from "./AboutCampaign";
import { Button } from "@mui/material";

const Campaign = ({campaign}) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  console.log(campaign)


  return (
    <>
      {
      campaign ? (
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="w-[250px] h-[350px] flex flex-col items-center rounded-md border border-gray  overflow-hidden relative bg-white">
            {/* Campaign Image */}
            <div className="h-[50%] w-full relative">
              <img
                className="w-full h-full object-cover"
                src={require("../../../Assets/Images/about/earthquake.webp")}
                alt="campaign"
              />

              {/* Percentage Raised */}
              <div className="absolute bottom-2 left-2 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-white bg-white shadow">
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-xs font-bold text-secondary">
                  {Math.floor((campaign.wallet / campaign.budget) * 100 || 0)}%
                </div>
              </div>

              {/* Category */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                {campaign.category}
              </div>
            </div>

            {/* Campaign Details */}
            <div className="h-[50%] flex flex-col justify-between items-center gap-4 px-2 py-3 w-full">
              <h1 className="font-semibold text-sm text-center px-2">{campaign.title}</h1>

              <Button
                sx={{ textTransform: "none", width: "100%" }}
                variant="outlined"
                onClick={toggleDrawer(true)}
              >
                View Campaign
              </Button>

              {/* Stats */}
              <div className="flex w-full bg-gray-100 py-2 rounded-lg">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-zinc-500">Raised</span>
                  <span className="text-sm font-medium">{campaign.wallet}</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center border-l border-r border-gray-300">
                  <span className="text-xs text-zinc-500">Goal</span>
                  <span className="text-sm font-medium">{campaign.budget}</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-zinc-500">Left</span>
                  <span className="text-sm font-medium">{campaign.budget - campaign.wallet}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer for details */}
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <AboutCampaign campaign={campaign} />
          </Drawer>
        </div>
      ) : (
        <div>Something went wrong.</div>
      )}
    </>
  );
};

export default Campaign;
