import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../Assets/Images/home/earthquake.webp";
import image2 from "../../../Assets/Images/home/floods.webp";
import image3 from "../../../Assets/Images/home/disaster.webp";

const HeroSection = () => {
  const [activeDate, setActiveDate] = useState(0);
  const [lineHeight, setLineHeight] = useState("130px");
  const [bgImage, setBgImage] = useState(image1);

  const dates = [
    {
      id: 0,
      date: "7-8 September 2023",
      image: image1,
      linePosition: "bottom",
    },
    {
      id: 1,
      date: "6-7 September 2024",
      image: image2,
      linePosition: "middle",
    },
    { id: 2, date: "8-9 September 2024", image: image3, linePosition: "top" },
  ];

  const getLineHeight = (position) => {
    switch (position) {
      case "top":
        return "100%";
      case "middle":
        return "50%";
      case "bottom":
        return "130px";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextDate = (activeDate + 1) % dates.length;

      setLineHeight(getLineHeight(dates[nextDate].linePosition));

      setTimeout(() => {
        setActiveDate(nextDate);
        setBgImage(dates[nextDate].image);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeDate, dates.length]);

  return (
    <header
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
      }}
      className="h-screen flex items-center overflow-hidden"
    >
      <div className="relative lg:w-9/12 w-full md:p-20 p-10 bg-gradient-to-r from-black to-transparent justify-center items-center h-full">
        <div className="absolute top-1/4 flex-col space-y-6 ">
          <div className="text-white">
            <img
              className="w-14 lg:w-16"
              src={require("../../../Assets/Images/home/box.png")}
              alt=""
            />
            <h2 className="lg:text-xl text-base">
              Together for a Better Tomorrow
            </h2>
            <h1 className="lg:text-6xl font-bold text-4xl">
              <span className="text-secondary">Support</span>, Impact
            </h1>
          </div>

          <p className="lg:w-2/4 text-white text-xs w-4/5 leading-5 ">
            Many in Morocco lost homes and loved ones in recent floods and
            earthquakes. Together we can help them rebuild and find hope. Every
            contribution makes a difference.
          </p>


          <Link to="/campaigns" >
          <button className="mt-5 text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white  align-middle transition-all rounded-lg cursor-pointer  leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
            Let's help them
          </button>
          </Link>
        </div>
      </div>

      <div className="h-full hidden lg:flex flex-col justify-center relative">
        <div className="w-[1px] h-full bg-white absolute right-0 bottom-0"></div>
        <div
          className="w-[2px] bg-blue-700 absolute right-0 bottom-0 transition-all duration-1000 ease-in-out"
          style={{ height: lineHeight }}
        ></div>
        <div className="h-3/5 lg:flex flex-col justify-between relative items-center">
          {dates
            .slice()
            .reverse()
            .map((date) => (
              <div
                key={date.id}
                className="flex items-center justify-center space-x-6"
              >
                <p
                  className={`text-white text-sm transition-all duration-300 ${
                    activeDate === date.id ? "font-bold text-lg" : ""
                  }`}
                >
                  {date.date}
                </p>
                <div className="relative">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div
                      className={`border ${
                        activeDate === date.id
                          ? "border-secondary"
                          : "border-white"
                      } w-8 h-8 rounded-full absolute transition-all duration-300`}
                    ></div>
                    <div
                      className={`${
                        activeDate === date.id ? "bg-secondary" : "bg-white"
                      } z-10 w-5 h-5 rounded-full absolute transition-all duration-300`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
