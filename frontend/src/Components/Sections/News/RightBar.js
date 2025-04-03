import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const RightBar = () => {
  return (
    <div className="bg-white rounded-md flex flex-col gap-4 p-4 h-max">
      <div className="flex items-center bg-lightBg rounded-full px-4 py-2">
        <i className="bi bi-search text-gray-500"></i>
        <input
          className="bg-transparent ml-3 text-sm text-black outline-none w-full"
          type="search"
          placeholder="Search organizations..."
        />
      </div>

      {/* Divider */}
      <Divider className="my-3" />

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 ">
        <Avatar
            sx={{ bgcolor: "#0866FF", height:"35px", width:"35px" }}
            alt="Hope Bird"
            src="../../../Assets/Images/about/girl.jpg"
          />
          <h3 className="font-semibold">Hope Bird</h3>
        </div>
        <div className="flex items-center gap-2 ">
        <Avatar
            sx={{ bgcolor: "#0866", height:"35px", width:"35px" }}
            alt="Tope Bird"
            src="../../../Assets/Images/about/girl.jpg"
          />
          <h3 className="font-semibold">The Freedom way</h3>
        </div>
        <div className="flex items-center gap-2 ">
        <Avatar
            sx={{ bgcolor: "#6136BA", height:"35px", width:"35px" }}
            alt="wope Bird"
            src="../../../Assets/Images/about/girl.jpg"
          />
          <h3 className="font-semibold">We are here</h3>
        </div>
        <div className="flex items-center gap-2 ">
        <Avatar
            sx={{ bgcolor: "#6136", height:"35px", width:"35px" }}
            alt="Tope Bird"
            src="../../../Assets/Images/about/girl.jpg"
          />
          <h3 className="font-semibold">Tadamoon.com</h3>
        </div>
      </div>
     
    </div>
  );
};

export default RightBar;
