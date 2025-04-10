import { useState, useEffect } from "react";
import Campaign from "./Campaign";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddNewCampaign from "./AddNewCampaign";
import {
  Campaign as CampaignIcon,
  EmojiEvents as TrophyIcon,
  HourglassTop as ClockIcon,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getCampaingsByOrganizationId } from "../../../Redux/APICalls/campaignsCall";

const CampaignsPage = () => {
  const { campaigns } = useSelector((state) => state.campaigns);
  const { org } = useSelector((state) => state.orgauth);
  const dispatch = useDispatch();
  const [campaigsRender, setCampaignsRender] = useState(campaigns);
  const [activeTab, setActiveTab] = useState("all");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setActiveTab(newTab);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filterCampaigns = (sta) => {
    const newCampaigns = campaigns.filer((item) => {
      if (sta === "reached") return item.wallet === item.budjet;
      return item.wallet !== item.budjet;
    });
    setCampaignsRender(newCampaigns);
  };

  // useEffect(()=>{
  //   dispatch(getCampaingsByOrganizationId(org.id));

  // },[campaigns]);

  return (
    <>
      <div className="mt-24 ml-[15%] flex flex-col ">
        <div className="">
          <h3 className="text-lg font-semibold text-black ml-4">
            Your Campaigns
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 border-b border-lightGray gap-4">
            <ToggleButtonGroup
              value={activeTab}
              exclusive
              onChange={handleTabChange}
              aria-label="campaign filters"
              className="gap-2 flex-wrap"
            >
              <ToggleButton
                value="all"
                className="px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
                onClick={() => {
                  setCampaignsRender(campaigns);
                }}
              >
                <CampaignIcon className="mr-2" /> All Campaigns
              </ToggleButton>
              <ToggleButton
                value="reached"
                className="px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
                onClick={() => {
                  filterCampaigns("reached");
                }}
              >
                <TrophyIcon className="mr-2" /> Goal Reached
              </ToggleButton>
              <ToggleButton
                value="unreached"
                className="px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
                onClick={() => {
                  filterCampaigns("unreached");
                }}
              >
                <ClockIcon className="mr-2" /> Goal Unreached
              </ToggleButton>
            </ToggleButtonGroup>

            <Button
              onClick={handleClickOpen}
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: "primary.dark",
                },
                textTransform: "none",
                px: 3,
                py: 1,
                borderRadius: "5px",
                fontWeight: 500,
              }}
            >
              New Campaign
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 p-4">
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            px: 3,
            pt: 3,
            pb: 1,
          }}
        >
          Create new Campaign
        </DialogTitle>
        <DialogContent>
          <AddNewCampaign
            close={() => {
              handleClose();
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CampaignsPage;
