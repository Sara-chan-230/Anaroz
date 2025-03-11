import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 z-50 p-2 w-full h-[80px] flex justify-center  bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-20 justify-between items-center">
          <div className="flex flex-row items-center">
            <img
              src={require("../../../Assets/Images/Logo/Anaroz.png")}
              width={70}
              alt=""
            />
            
            <h1 className="text-3xl font-bold text-primary mt-2"> ANaroz</h1>
          </div>
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
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex space-x-2">
          <button className=" inline-block  px-6 py-3 mr-3 font-bold bg-primary text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl  leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
            Contact us
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="inline-block px-6 py-3 mr-3 font-bold bg-primary text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl  leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85"
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
