import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="bg-primary -z-50 flex md:p-10 p-5 justify-around items-center">
        <div className="relative h-fit hidden lg:flex">
          <div className="h-32 w-32 bg-cyan rounded-full absolute top-0 left-0  "></div>
          <div className="relative w-fit">
            <div className="h-80 w-80 bg-primaryLight/70 rounded-full flex mt-8 z-50 flex-col justify-center items-center">
              <h1 className="text-white text-xl">You want to Help? </h1>
              <span className="font-bold text-2xl text-white">Join us</span>
            </div>

            <div className="h-20 w-20 bg-tertiary rounded-full absolute bottom-0 right-0"></div>
          </div>
        </div>
        <div className="w-fit flex flex-col justify-around">
          <div className="flex items-center">
            <Link to="/">
            <img
              src={require("../../../Assets/Images/Logo/Anaroz.png")}
              alt=""
              className="md:w-24 w-16 pr-4"
            />
            </Link>
            <div className="text-white border-l-2 h-full p-4 border-black ">
              <h1 className="md:text-3xl text-xl font-bold">Anaroz</h1>
              <p className="md:text-xs text-[10px] text-gray">
                Donation plateform
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 p-4">
            <a href="#">
              <i className="fa-brands fa-square-facebook text-white md:text-2xl"></i>
            </a>
            <a href="http/linkedin.com">
              <i className="fa-brands fa-linkedin text-white md:text-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter text-white md:text-2xl"></i>
            </a>
          </div>
          <div className="p-4">
            <div className="text-gray">
              <Link className="pr-2 border-r-2 md:text-sm text-xs">
                Privacy policy
              </Link>
              <Link className="pl-2 md:text-sm text-xs">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-gray md:text-sm mt-2 text-xs">
              &copy; 2024 Anaroz. All rights reserved
            </p>
          </div>
        </div>
        <div>
          <ul className="text-white flex flex-col gap-6">
            <li className=" underline md:text-2xl text-xl">Site Map</li>
            <li className="relative group w-fit md:text-base text-xs ">
              <Link
                to="/"
                className="transition-all duration-300 group-hover:text-secondary text-white"
              >
                Home page
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group w-fit md:text-base text-xs ">
              <Link
                to="/about"
                className="transition-all duration-300 group-hover:text-secondary text-white"
              >
                About us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group w-fit md:text-base text-xs">
              <Link
                to="/news"
                className="transition-all duration-300 group-hover:text-secondary text-white"
              >
                News
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white flex flex-col gap-6">
            <li className=" underline md:text-2xl text-xl">Quik Links</li>
            <li className="relative group w-fit md:text-base text-xs">
              <Link
                to="/campaigns"
                className="transition-all duration-300 group-hover:text-secondary text-white"
              >
                Campaigns
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group w-fit md:text-base text-xs">
              <Link
                to="/news"
                className="transition-all duration-300 group-hover:text-secondary text-white"
              >
                News
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>

            <li className="relative group w-fit md:text-base text-xs">
              <Link
                to="/map"
                className="transition-all duration-500 group-hover:text-secondary text-white"
              >
                Map
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



