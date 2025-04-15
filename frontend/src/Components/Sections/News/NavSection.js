import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NavSection = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className="w-full fixed top-0 z-10 bg-white py-4">
      <div className="w-[95%] max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link to = "/">
        <div>
          <h1 className="text-2xl font-semibold tracking-wider uppercase">
            Anaroz <span className="text-[#0866FF]">News</span>
          </h1>
        </div>
        </Link>

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
          <Link to={`profile/${user._id}`}>
            <Avatar
              alt="Ahmad Ali"
              src={user.photo}
              className="w-10 h-10  border-white"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
