import  { useState } from "react";
import Campaign from "./Campaign";
import {
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  Campaign as CampaignIcon,
  EmojiEvents as TrophyIcon,
  HourglassTop as ClockIcon,
} from "@mui/icons-material";

const CampaignsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [category, setCategory] = useState("");

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setActiveTab(newTab);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="mt-24 ml-[15%] flex flex-col ">
      <div className="">
        <h3 className="text-lg font-semibold text-black ml-4">Your Campaigns</h3>
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
            >
              <CampaignIcon className="mr-2" /> All Campaigns
            </ToggleButton>
            <ToggleButton
              value="reached"
              className="px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
            >
              <TrophyIcon className="mr-2" /> Goal Reached
            </ToggleButton>
            <ToggleButton
              value="unreached"
              className="px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
            >
              <ClockIcon className="mr-2" /> Goal Unreached
            </ToggleButton>
          </ToggleButtonGroup>

          <FormControl size="small" className="w-[20%]">
            <InputLabel id="category-filter-label">Category</InputLabel>
            <Select
              labelId="category-filter-label"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              className="bg-white"
            >
              <MenuItem value="education">📚 Education</MenuItem>
              <MenuItem value="health">🏥 Health & Medical</MenuItem>
              <MenuItem value="disaster">🚨 Disaster Relief</MenuItem>
              <MenuItem value="environment">
                🌿 Environment & Sustainability
              </MenuItem>
              <MenuItem value="food">🍲 Food & Hunger</MenuItem>
              <MenuItem value="housing">🏠 Housing & Shelter</MenuItem>
              <MenuItem value="animals">🐾 Animal Welfare</MenuItem>
              <MenuItem value="human_rights">
                ✊ Human Rights & Social Justice
              </MenuItem>
              <MenuItem value="community">🤝 Community Development</MenuItem>
              <MenuItem value="arts">🎭 Arts & Culture</MenuItem>
            </Select>
          </FormControl>
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
  );
};

export default CampaignsPage;
