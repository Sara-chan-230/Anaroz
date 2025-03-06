import map from "../../../Assets/Images/home/EEF6CC85-F641-4370-8FBB-6292FE41532D.jpg";
import affected from "../../../Assets/Images/home/affected.webp";
const MapSection = () => {
  return (
    <div className="relative flex flex-wrap-reverse justify-center md:gap-10 lg:gap-20 gap-28 items-center w-screen">
      <div className="md:w-[35%] w-[90%] gap-5 items-start flex flex-col">
        <img
          className=" brightness-105 -z-10 absolute left-[5%] "
          src={require("../../../Assets/Images/home/image.webp")}
          alt=""
        />
        <h1 className="text-2xl font-bold ">
          <span className="text-secondary">See Beyond Boundaries with Our</span>{" "}
          Interactive Map
        </h1>
        <p className="text-xs lg:text-base">
          Our interactive map offers real-time info on locations and resources
          with clear markers and easy navigation, helping you quickly find
          service areas and updates.
        </p>
        <button className="w-fit text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white  align-middle transition-all rounded-lg cursor-pointer  leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
          Explore the map
        </button>
      </div>
      <div className="relative md:w-[40%] w-[90%] flex justify-end ">
        <div
          className="w-[80%] lg:h-80 md:h-60 h-52 rounded-2xl "
          style={{
            backgroundImage: `url(${affected})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[75%] lg:h-72 md:h-56 h-48 rounded-2xl absolute top-[40%] right-[25%] border-8 border-white"
          style={{
            backgroundImage: `url(${map})`,
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
