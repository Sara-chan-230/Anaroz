import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import ContactUs from "./ContactUs";
import { ReactComponent as AnarozLogo } from "../../../Assets/Images/Logo/Anaroz.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        bgcolor: "white",
        boxShadow: "none",
        border: "1 solid black",
      }}
    >
      <Toolbar>
        <div className="flex justify-between items-center w-full py-2">
          <div className="flex gap-14 text-black justify-center items-center ">
            <Link to="/">
              <div className="flex items-center justify-center">
                <AnarozLogo width={80} />
              </div>
            </Link>
            <ul className="hidden lg:flex space-x-6">
              <li className="hover:text-secondary">
                <Link to="/">Home</Link>
              </li>
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <li className="hover:text-secondary">
                <Link to="/about">About Us</Link>
              </li>
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <li className="hover:text-secondary">
                <Link to="/campaigns">Campiangs</Link>
              </li>
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <li className="hover:text-secondary">
                <Link to="/map">Map</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex space-x-2">
          <button
                  onClick={handleClickOpen}
                  className=" inline-block  px-6 py-3 mr-3 font-bold bg-primary text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl  leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85"
                >
                  Contact us
                </button>
            {user ? (
              <>
                <div className="flex items-center bg-[#E2E5E9] px-4 py-0 rounded-full">
                  <img
                    src={require("../../../Assets/Images/Logo/Hope-piece.png")}
                    alt="Hope Pieces"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="font-semibold text-sm">
                    {user.hope_piece}
                  </span>
                </div>

                {/* Avatar */}
                  <Link to = {`profile/${user._id}`}>
                  <Avatar
                    alt={user.full_name}
                    src={user.photo}
                    className="w-10 h-10  border-white"
                  />
                  </Link>
              </>
            ) : (
              <>
               
                <button
                  onClick={() => navigate("/signup")}
                  className="inline-block px-6 py-3 mr-3 font-bold bg-primary text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl  leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85"
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      </Toolbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-dialog-title"
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "12px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: 600,
            px: 3,
            pt: 3,
            pb: 1,
            color: "#063751",
            borderBottom: "1px solid rgba(6, 55, 81, 0.1)",
          }}
        >
          Contact Us
        </DialogTitle>

        <DialogContent sx={{ px: 3, pt: 2, pb: 0 }}>
          <ContactUs />
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            py: 2,
            gap: 2,
            borderTop: "1px solid rgba(6, 55, 81, 0.1)",
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
                backgroundColor: "rgba(6, 55, 81, 0.08)",
                borderColor: "#063751",
              },
              textTransform: "none",
              py: 1.25,
              borderRadius: "8px",
              borderWidth: "1.5px",
              borderColor: "rgba(6, 55, 81, 0.3)",
              color: "#063751",
              fontWeight: 500,
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleClose}
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#063751",
              "&:hover": {
                backgroundColor: "#04283a",
              },
              boxShadow: "none",
              textTransform: "none",
              py: 1.25,
              borderRadius: "8px",
              fontWeight: 500,
            }}
            autoFocus
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
