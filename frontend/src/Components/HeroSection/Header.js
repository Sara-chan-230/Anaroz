import image from "../../Assets/Images/home/Morocco-earthquake-3.webp";
import React from "react";
const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" h-screen flex items-center overflow-hidden "
      >
      <div className="relative lg:w-9/12 w-full md:p-20 p-10 bg-gradient-to-r from-black to-transparent justify-center  items-center h-full">
        <div className="absolute top-1/4 flex-col space-y-6 ">
          <div className="text-white">
            <img
              className="w-14 lg:w-16"
              src={require("../../Assets/Images/home/box.png")}
              alt=""
            />
            <h2 className="lg:text-xl text-base ">
              Together for a Better Tomorrow
            </h2>
            <h1 className="lg:text-6xl font-bold mr-0 text-4xl ">
              <span className="text-secondary">Support</span>, Impact
            </h1>
          </div>

          <p className="lg:w-2/4 text-white text-xs w-4/5 leading-5 ">
            Many in Morocco lost homes and loves ones in recent floods and
            earthquakes. Togeter we can help them rebuild and find hope. Every
            contribution make the difference
          </p>

          <button className=" text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white  align-middle transition-all rounded-lg cursor-pointer  leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
            Let's help them
          </button>
        </div>
      </div>

      <div className="h-3/5 hidden lg:flex flex-col justify-between items-center">
        <div className="h-2/5 flex flex-col justify-between items-center">
          <div className="flex items-center justify-center space-x-6">
            <p className="text-white text-sm">8-9 September 2024</p>
            <div className="relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="border border-white w-8 h-8 rounded-full absolute"></div>
                <div className="bg-white z-10 w-5 h-5 rounded-full absolute"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <p className="text-white text-sm">6-7 September 2024</p>
            <div className="justify-center flex items-center">
              <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-[1px] sm:h-48 md:h-72 lg:h-96 bottom-0 bg-white absolute"></div>
                  <div className="border border-white w-8 h-8 rounded-full absolute"></div>
                  <div className="bg-white z-10 w-5 h-5 rounded-full absolute"></div>
                  <div className="w-[1px] sm:h-24 md:h-48 lg:h-[240px] top-0 bg-white absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <p className="text-white text-sm">7-8 September 2023</p>
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="border border-white w-8 h-8 rounded-full absolute"></div>
              <div className="bg-white z-10 w-5 h-5 rounded-full absolute"></div>
              <div className="w-[1px] sm:h-24 md:h-36 lg:h-48 bg-white absolute top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
