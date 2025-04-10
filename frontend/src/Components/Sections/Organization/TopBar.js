import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import AddNewCampaign from "./AddNewCampaign";


const TopBar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
                borderRadius: "5px",
                fontWeight: 500,
              }}
            >
              New Campaign
            </Button>

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
          <AddNewCampaign close={()=>{handleClose()}} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TopBar;
