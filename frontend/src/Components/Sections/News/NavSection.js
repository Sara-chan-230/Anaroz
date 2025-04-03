import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";

const NavSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sample news notifications data
  const notifications = [
    {
      id: 1,
      title: "Breaking News Update",
      description: "Major event just occurred in the capital city",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      title: "New Article Published",
      description: "Your weekly digest is now available",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      title: "Trending Story Alert",
      description: "Political analysis piece is gaining attention",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 4,
      title: "Editor's Pick",
      description: "Recommended read for you based on your interests",
      time: "Yesterday",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav className="w-full fixed top-0 z-10 bg-white py-4">
      <div className="w-[95%] max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-semibold tracking-wider uppercase">
            Anaroz <span className="text-[#0866FF]">News</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center py-2 px-4 rounded-full bg-lightBg transition-colors duration-300">
          <SearchIcon className="text-gray-500" fontSize="small" />
          <input
            className="bg-transparent outline-none w-[30vw] max-w-md min-w-[200px] ml-3 text-sm text-gray-800 placeholder-gray-500"
            type="search"
            placeholder="Search for news..."
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Badge
            badgeContent={unreadCount}
            color="error"
            overlap="circular"
            onClick={toggleDrawer(true)}
            className="cursor-pointer"
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "#e0e0e0",
                "&:hover": { bgcolor: "#d0d0d0" },
              }}
              className="transition-colors"
            >
              <NotificationsIcon sx={{ color: "#555", fontSize: 20 }} />
            </Avatar>
          </Badge>

          <Avatar
            sx={{
              bgcolor: "#0866FF",
              width: 36,
              height: 36,
              "&:hover": { opacity: 0.9 },
            }}
            alt="User Avatar"
            src={require("../../../Assets/Images/about/girl.jpg")}
            className="transition-opacity"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
