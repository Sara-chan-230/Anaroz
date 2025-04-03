import { Link } from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Avatar from "@mui/material/Avatar";
const LeftBar = () => {
  return (

    <div className="sticky max-h-max top-20 ">
      <div className="bg-white p-4 rounded-md flex items-center gap-2">
        <div className="">
          <Avatar
            sx={{ bgcolor: "#0866FF" }}
            alt="Remy Sharp"
            src="../../../Assets/Images/about/girl.jpg"
          />
        </div>
        <div>
          <h4 className="text font-semibold">Remy Sharp</h4>
          <p className="text-xs text-gray">Supporter</p>
        </div>
      </div>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#FFFFFF', marginTop: "1rem" , borderRadius: "0,5rem"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Main Menu
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
        <HouseRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NewspaperRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="News" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CampaignRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Memo" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ColorLensRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Theme" />
      </ListItemButton>
    </List>
     
    </div>
  );
};

export default LeftBar;
