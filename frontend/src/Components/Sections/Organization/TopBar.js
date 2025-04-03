import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { Button, Chip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import AddNewCampaign from "./AddNewCampaign";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CloseIcon from "@mui/icons-material/Close";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [notificationCount] = useState(3);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationOpen(!notificationOpen);
  };

  const notifications = [
    {
      id: 1,
      text: "New campaign submitted for review",
      time: "10 min ago",
      sender: "System",
    },
    {
      id: 2,
      text: "Your campaign was approved",
      time: "2 hours ago",
      sender: "Marketing Team",
    },
    {
      id: 3,
      text: "New message from support team",
      time: "1 day ago",
      sender: "Support",
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: "240px" },
          bgcolor: "white",
          boxShadow: "none",
          backdropFilter: "blur(6px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            px: 3,
            gap: 2,
          }}
        >
          <div className="flex items-center gap-4">
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
                borderRadius: "8px",
                fontWeight: 500,
              }}
            >
              New Campaign
            </Button>

            <IconButton
              color="inherit"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
              onClick={toggleNotifications}
            >
              <Badge badgeContent={notificationCount} color="error" max={9}>
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 36,
                height: 36,
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.2s",
                },
              }}
              alt="Hope Bird"
              src={require("../../../Assets/Images/about/Testimonial/Karim-Dounia.webp")}
            />
          </div>
        </Toolbar>
      </AppBar>

      {/* Simplified Notification Drawer */}
      <Drawer
        anchor="right"
        open={notificationOpen}
        onClose={toggleNotifications}
        sx={{
          "& .MuiDrawer-paper": {
            width: 360,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="h6" fontWeight="600">
            Notifications
          </Typography>
          <IconButton onClick={toggleNotifications} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ p: 2 }}>
          <Chip
            label={`${notificationCount} New`}
            color="primary"
            size="small"
            sx={{ mb: 2 }}
          />
        </Box>

        <List sx={{ width: "100%", p: 0 }}>
          {notifications.map((notification) => (
            <Box key={notification.id}>
              <ListItem
                sx={{
                  px: 2,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                  transition: "background-color 0.2s",
                }}
              >
                <ListItemAvatar sx={{ minWidth: 40 }}>
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {notification.sender.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1">{notification.text}</Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {notification.time} • {notification.sender}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
        </List>
      </Drawer>

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
        <DialogContent >
          <AddNewCampaign />
        </DialogContent>
        <DialogActions
          sx={{
            px: 3,
            py: 2,
            gap: 2,
          }}
        >
          <Button
            onClick={handleClose}
            fullWidth
            variant="outlined"
            sx={{
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "action.hover",
              },
              textTransform: "none",
              py: 1,
              borderRadius: "8px",
              borderWidth: "1.5px",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            fullWidth
            variant="contained"
            sx={{
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "primary.dark",
              },
              textTransform: "none",
              py: 1,
              borderRadius: "8px",
              fontWeight: 500,
            }}
            autoFocus
          >
            Create Campaign
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TopBar;
