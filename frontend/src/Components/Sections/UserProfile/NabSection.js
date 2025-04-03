import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    padding: '0 4px',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ff3d00', // Vibrant orange-red
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(255, 61, 0, 0.7)',
    },
    '70%': {
      boxShadow: '0 0 0 8px rgba(255, 61, 0, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(255, 61, 0, 0)',
    },
  }
}));

const NabSection = () => {
  const notificationCount = 3; // Replace with your actual state

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          bgcolor: "white",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <Toolbar>
          <div className="flex justify-between items-center w-full py-2 px-4">
            <Link to="/" className="no-underline">
              <div className="flex items-center justify-center">
                <img
                  width={70}
                  src={require("../../../Assets/Images/Logo/Anaroz.png")}
                  alt="ANaroz Logo"
                  className="hover:scale-105 transition-transform"
                />
                <span className="font-semibold mt-2 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-secondary">
                  ANaroz
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              {/* Enhanced Notification Icon */}
              <IconButton 
                aria-label="notifications" 
                sx={{
                  position: 'relative',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease-in-out',
                  }
                }}
              >
                <StyledBadge 
                  badgeContent={notificationCount} 
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <NotificationsIcon 
                    sx={{ 
                      color: "#5f6368",
                      fontSize: 28,
                      '&:hover': {
                        color: "#1976d2",
                      }
                    }} 
                  />
                </StyledBadge>
              </IconButton>

              {/* Clean Avatar without badge */}
              <Avatar
                sx={{ 
                  bgcolor: "#ba68c8", 
                  width: 42, 
                  height: 42,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
                alt="User Avatar"
                src={require("../../../Assets/Images/about/Testimonial/Yassmin-haddad.webp")}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NabSection;