import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const {org} = useSelector((state)=>state.orgauth);
  return (
    <Drawer
      sx={{
        width: "15%",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "15%",
          boxSizing: "border-box",
          bgcolor: "#e1f5fe",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <NavLink to="/" className="no-underline">
        <div className="flex justify-center items-center mt-4">
          <img
            src={require("../../../Assets/Images/Logo/Anaroz.png")}
            alt="Anaroz Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="font-semibold mt-2 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-secondary">
            ANaroz
          </span>
        </div>
      </NavLink>

      <List>
        <ListItem disablePadding>
          <NavLink to="overview" className="w-full no-underline">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="campaigns" className="w-full no-underline">
            <ListItemButton>
              <ListItemIcon>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary="Campaigns" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink to="posts" className="w-full no-underline">
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <Divider sx={{ borderColor: "#b3e5fc" }} />

        <ListItem disablePadding>
          <NavLink to="settings" className="w-full no-underline">
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
      <div className="absolute bottom-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[60%] left-6 w-8 h-8 bg-pink-500 rounded-full opacity-30"></div>
        <div className="absolute top-[50%] right-12 w-10 h-10 bg-blue-500 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-6 right-6 w-8 h-8 bg-yellow-500 opacity-25 rounded-md"></div>
        <div className="absolute bottom-10 left-10 w-10 h-10 bg-green-400 rounded-lg opacity-20"></div>
        <div className="absolute top-18 right-8 w-6 h-6 bg-purple rounded-full opacity-15"></div>
        <div className="absolute top-[70%] left-16 w-12 h-12 bg-red opacity-10"></div>
        <div className="absolute bottom-4 left-24 w-8 h-8 bg-indigo-400 opacity-25"></div>
        <div className="absolute top-[24%] right-16 w-6 h-6 bg-teal-500 rounded-md opacity-15"></div>
        <div className="absolute top-[70%] right-2 w-8 h-8 bg-orange-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-14 w-6 h-6 bg-pink-700 opacity-15"></div>
        <div className="absolute top-22 left-8 w-10 h-10 bg-amber-400 rounded-full opacity-20"></div>{" "}
      </div>
    </Drawer>
  );
};

export default NavBar;
