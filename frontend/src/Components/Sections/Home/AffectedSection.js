import piece from "../../../Assets/Images/home/Help.webp";
import hope from "../../../Assets/Images/home/piece.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AffectedSection = () => {
  return (
    <div className="w-full flex items-center flex-wrap justify-center md:gap-0 gap-14 md:justify-start relative">
      <div className="absolute top-[-10%] left-[-10%] w-[150px] h-[150px] bg-primaryLight opacity-30 rounded-full z-0"></div>
      <div className="absolute top-[25%] right-[-10%] w-[120px] h-[120px] bg-secondary opacity-20 rounded-full z-0"></div>
      <div className="absolute top-[50%] left-[10%] w-[200px] h-[200px] bg-indigo-400 opacity-30 rounded-full z-0"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[180px] h-[60px] bg-teal-500 opacity-20 transform rotate-45 z-0"></div>

      <div className="md:w-[55%] w-[90%] flex md:gap-10 gap-5 md:items-start items-center justify-center relative z-10">
        <div className="md:w-[35%] w-[45%] relative flex flex-col">
          <div className="absolute bottom-0 w-full h-2 bg-black opacity-30 blur-lg rounded-full"></div>
          <motion.div
            style={{
              backgroundImage: `url(${hope})`,
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

        <div className="md:w-[35%] w-[45%] relative flex flex-col">
          <div className="absolute -bottom-12 w-full h-2 bg-black opacity-30 blur-lg rounded-full"></div>
          <motion.div
            style={{
              backgroundImage: `url(${piece})`,
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
      </div>

      <div className="md:w-[35%] w-[90%] gap-5 items-start flex flex-col justify-between relative z-10">
        <h1 className="text-2xl font-bold">
          <span className="text-secondary">Anaroz</span>: Your Support Network
          for Hope and Recovery
        </h1>
        <p className="text-xs lg:text-base">
          At Anaroz, we're here to support you through this challenging time.
          Our team is ready to help, and our interactive map provides real-time
          updates and support locations.
        </p>
        <Link to="signup">
          <button className="w-fit text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white align-middle transition-all rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
            Join us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AffectedSection;
