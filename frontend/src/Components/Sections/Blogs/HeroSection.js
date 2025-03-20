import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-[95%] h-[400px] bg-blue-400 rounded-2xl flex items-center relative">
        <div className="flex flex-col w-2/5 gap-5 absolute left-[50%]">
          <p className="rounded-full px-6 py-2 border w-fit">Latest News</p>
          <h1 className="text-4xl font-semibold">
            Stories of Impact, Hope, and Action
          </h1>
          <p className="">
            Discover inspiring stories, urgent updates, and community-driven
            initiatives. Stay informed about the latest relief efforts,
            volunteer opportunities, and ways you can make a difference.
          </p>
          {/* <button>Explore more</button> */}
        </div>
        <img
          className="w-[500px] absolute left-[5%] bottom-0"
          src={require("../../../Assets/Images/blogs/donation-box.webp")}
          alt=""
        />
        {/* Background Decorative Shapes */}
        <svg
          className="absolute top-0 left-0 right-0 z-10 opacity-30"
          viewBox="0 0 1512 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="150" r="120" fill="#FF7A00" opacity="0.5" />
          <circle cx="1200" cy="350" r="100" fill="#34C3F6" opacity="0.3" />
          <polygon
            points="800 300, 950 350, 750 350"
            fill="#FF7A00"
            opacity="0.4"
          />
          <polygon
            points="400 50, 500 100, 300 100"
            fill="#34C3F6"
            opacity="0.4"
          />
          {/* More Shapes */}
          <circle cx="1000" cy="100" r="150" fill="#1E6286" opacity="0.4" />
          <circle cx="400" cy="350" r="200" fill="#FF5C8D" opacity="0.3" />
          <polygon
            points="1100 200, 1200 250, 1000 250"
            fill="#FF5C8D"
            opacity="0.5"
          />
          <polygon
            points="700 500, 850 550, 650 550"
            fill="#1E6286"
            opacity="0.3"
          />
          <ellipse
            cx="1400"
            cy="250"
            rx="100"
            ry="50"
            fill="#34C3F6"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="w-[95%] flex gap-6">
        <div className="w-[25%] h-[400px] rounded-2xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={require("../../../Assets/Images/blogs/story.webp")}
            alt=""
          />
          <div className="w-full h-full bg-[#0000004c] absolute top-0 left-0 p-5 flex flex-col justify-between">
            <Link className="h-10 w-10 rounded-full flex justify-center items-center border border-white ml-auto">
              <i className="fa-solid fa-arrow-right -rotate-45 text-xl text-white"></i>
            </Link>
            <h2 className="text-white">
              How Volunteers Are Changing Lives in Flood-Affected Communities
            </h2>
          </div>
        </div>
        <div className="w-[25%] h-[400px] rounded-2xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={require("../../../Assets/Images/blogs/col.webp")}
            alt=""
          />
          <div className="w-full h-full bg-[#0000004c] absolute top-0 left-0 p-5 flex flex-col justify-between">
            <Link className="h-10 w-10 rounded-full flex justify-center items-center border border-white ml-auto">
              <i className="fa-solid fa-arrow-right -rotate-45 text-xl text-white"></i>
            </Link>
            <h2 className="text-white">
              How Volunteers Are Changing Lives in Flood-Affected Communities
            </h2>
          </div>
        </div>
        <div className="w-[50%] h-[400px] rounded-2xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={require("../../../Assets/Images/blogs/newpaper.webp")}
            alt=""
          />
          {/* <div className="w-full h-full bg-[#00000023] absolute top-0 left-0 p-5 flex flex-col justify-between">
            <Link className="h-10 w-10 rounded-full flex justify-center items-center bg-white border border-white ml-auto">
              <i className="fa-solid fa-arrow-right -rotate-45 text-xl "></i>
            </Link>

          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
