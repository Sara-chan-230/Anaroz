import React from "react";
import Hiba from "../../../Assets/Images/about/Our Team/Elharda-Hiba.webp";
import Sara from "../../../Assets/Images/about/Our Team/imag.jpg";
import image from "../../../Assets/Images/about/girl.jpg";

const OurTeamSection = () => {
  return (
    <div className="w-[90%] flex flex-col justify-center mx-auto gap-10 relative">
      <h1 className="lg:text-6xl text-5xl font-semibold">
        Our Team{" "}
        <span className="lg:text-2xl text-xl">Your Trusted Partners</span>
      </h1>
      <div className="flex justify-center lg:gap-14 gap-5 flex-wrap">
        <div className="flex flex-col gap-2 md:w-[30%] w-[90%]">
          <div
            className="clip5 h-96 bg-gray bg-center bg-cover grayscale"
            style={{
              backgroundImage: `url(${Hiba})`,
            }}
          ></div>
          <div>
            <h1 className="text-2xl">Hiba Elharda</h1>
            <p className="text-sm text-zinc-500">API Developper</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-[30%] w-[90%]">
          <div
            className="clip5 h-96 bg-gray bg-center grayscale bg-cover"
            style={{
              backgroundImage: `url(${Sara})`,
            }}
          ></div>
          <div>
            <h1 className="text-2xl">Sara OUTAHER</h1>
            <p className="text-sm text-zinc-500">Full Stack Developper</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-[30%] w-[90%]">
          <div
            className="clip5 grayscale h-96 bg-gray bg-center bg-cover"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div>
            <h1 className="text-2xl">Ibtissam Allaoui</h1>
            <p className="text-sm text-zinc-500">Data Architect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
