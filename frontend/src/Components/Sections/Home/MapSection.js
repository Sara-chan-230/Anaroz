import hope from "../../../Assets/Images/home/hope1.webp";
import donation from "../../../Assets/Images/home/donate.webp";
import { Link } from "react-router-dom";
const MapSection = () => {
  return (
    <div className="relative flex flex-wrap-reverse justify-center md:gap-10 lg:gap-20 gap-28 items-center w-screen">
      <div className="md:w-[35%] w-[90%] gap-5 items-start flex flex-col">
        <div className="absolute bottom-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-[55%] left-[30%] w-20 h-20 bg-emerald-200 opacity-25 rounded-lg"></div>
          <div className="absolute top-[60%] right-[10%] w-6 h-10 bg-violet-300 opacity-20 transform rotate-12"></div>
          <div className="absolute top-[65%] left-[20%] w-11 h-6 bg-cyan rounded-full opacity-15"></div>
          <div className="absolute top-[70%] right-[30%] w-7 h-7 bg-fuchsia-200 opacity-25 rotate-45"></div>

          <div className="absolute bottom-[15%] left-[10%] w-40 h-40 bg-orange-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-[25%] left-[30%] w-6 h-9 bg-amber-200 transform -rotate-12 opacity-20"></div>
        </div>
        <h1 className="text-2xl font-bold ">
          <span className="text-secondary">See Beyond Boundaries with Our</span>{" "}
          Interactive Map
        </h1>
        <p className="text-xs lg:text-base">
          Our interactive map offers real-time info on locations and resources
          with clear markers and easy navigation, helping you quickly find
          service areas and updates.
        </p>
        <Link to="/map">
          <button className="w-fit text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white  align-middle transition-all rounded-lg cursor-pointer  leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
            Explore the map
          </button>
        </Link>
      </div>
      <div className="relative md:w-[40%] w-[90%] flex justify-end ">
        <div
          className="w-[80%] lg:h-80 md:h-60 h-52 rounded-2xl "
          style={{
            backgroundImage: `url(${hope})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[75%] lg:h-72 md:h-56 h-48 rounded-2xl absolute top-[40%] right-[25%] border-8 border-white"
          style={{
            backgroundImage: `url(${donation})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MapSection;
