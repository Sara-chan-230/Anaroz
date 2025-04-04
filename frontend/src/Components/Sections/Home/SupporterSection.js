import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import solide from "../../../Assets/Images/home/Solidarity.webp";
import volunteer from "../../../Assets/Images/home/Volunteer.webp";

const SupporterSection = () => {
  return (
    <div className="relative mb-48 w-full flex items-center flex-wrap-reverse justify-center md:gap-0 gap-14 md:justify-end">
      <div className="absolute top-[15%] left-[5%] w-[180px] h-[180px] bg-orange-300 opacity-30 rounded-full z-0"></div>
      <div className="absolute bottom-[5%] right-[10%] w-[150px] h-[150px] bg-teal-500 opacity-20 rounded-full z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-[200px] h-[200px] bg-indigo-400 opacity-25 rounded-full z-0"></div>

      <div className="md:w-[35%] w-[90%] md:text-right gap-5 md:items-end items-start flex flex-col justify-between z-10">
        <h1 className="text-2xl font-bold ">
          <span className="text-secondary">Join Hands</span>, Make a Difference!
        </h1>
        <p className="text-xs lg:text-base md:text-right">
          Volunteer or donate to support communities in need. Together, we can
          rebuild lives and bring hope where it's needed most.
        </p>
        <Link to="campaigns">
        <button className="w-fit text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white align-middle transition-all rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
          Help Now
        </button>
        </Link>
      </div>

      <div className="md:w-[55%] w-[90%] flex md:gap-10 gap-5 md:items-start items-center justify-center z-10">
        <div className="md:w-[35%] w-[45%] relative flex flex-col">
          <div className="absolute bottom-0 w-full h-2 bg-black opacity-30 blur-lg rounded-full"></div>
          <motion.div
            style={{
              backgroundImage: `url(${solide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full md:h-72 lg:h-96 h-80 rounded-2xl mt-12"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>

        <div className="md:w-[35%] w-[45%] relative flex flex-col">
          <div className="absolute -bottom-12 w-full h-2 bg-black opacity-30 blur-lg rounded-full"></div>
          <motion.div
            style={{
              backgroundImage: `url(${volunteer})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full md:h-72 lg:h-96 h-80 rounded-2xl"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupporterSection;
