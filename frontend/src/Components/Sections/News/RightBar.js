import { Divider } from "@mui/material";

const RightBar = () => {
  return (
    <div className="bg-white rounded-md p-3">
      {/* Search Bar */}
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

     
    </div>
  );
};

export default RightBar;
