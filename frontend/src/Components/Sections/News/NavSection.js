import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
const NavSection = () => {
  return (
    <nav className="w-full fixed top-0 z-10 bg-white p-3">
      <div className="w-[95%] my-0 mx-auto flex justify-between items-center">
        <div className="flex gap-0 items-center">
          <h1 className="text-2xl font-semibold tracking-widest uppercase">Anaroz <span className="text-secondary">News</span></h1>
        </div>
        <div className="py-2 px-5 rounded-full bg-lightBg ">
          <i class="bi bi-search"></i>
          <input className="bg-transparent w-[30vw] ml-4 text-sm text-black" type="search" placeholder="Search" />
        </div>
        <div className="flex items-center gap-2">
          <Avatar sx={{width: "35px" , height: "35px" , bgcolor: "#e0e0e0"}}>
            <NotificationsIcon />
          </Avatar>
          <Avatar
            sx={{bgcolor: "#0866FF", width: "35px" , height: "35px"}}
            alt="Remy Sharp"
            src="../../../Assets/Images/about/girl.jpg"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
