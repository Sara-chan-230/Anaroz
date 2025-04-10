import { motion } from "framer-motion";

const JoinSection = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-lightBg overflow-hidden relative">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primaryLight lg:h-60 h-36 w-36 lg:w-60 rounded-full absolute -right-[10px] top-0"
      />
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primaryLight h-20 w-20 rounded-full absolute right-6 top-[260px]"
      />
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primaryLight h-14 w-14 rounded-full absolute -right-[20px] top-[350px]"
      />
      <motion.img
        initial={{ rotate: -4 }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:w-48 w-24 lg:h-56 h-32 -rotate-3 sm:flex hidden absolute rounded-xl top-[10%] left-[10%] z-10"
        src={require("../../../Assets/Images/about/Abdelkrim al-Khattabi.webp")}
        alt=""
      />
      <motion.img
        initial={{ rotate: 4 }}
        animate={{ rotate: [4, -4, 4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:w-44 w-24  lg:h-60 h-36 rotate-3 sm:flex hidden grayscale absolute rounded-xl top-[10%] right-[10%] z-10"
        src={require("../../../Assets/Images/about/child.webp")}
        alt=""
      />
      <div className="sm:w-2/5 w-3/4 z-10  flex flex-col justify-center items-center lg:gap-14 gap-5 ">
        <p className="lg:text-xl  text-center">
          Let's draw the smile together, shaping moments of joy and hope for
          those in need, With :
        </p>
        <h1 className="lg:text-7xl text-5xl">+50.000</h1>
        <div className="flex flex-col gap-3">
          <p>people already joining</p>
          <button className="px-6 py-2 w-fit bg-primaryLight text-white rounded-full">
            Are you ready?
          </button>
        </div>
      </div>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primaryLight lg:h-20 h-14 w-14 lg:w-20 rounded-full absolute left-0 bottom-2"
      />
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primaryLight lg:h-60 h-36 w-36 lg:w-60 rounded-full absolute -left-6 bottom-24"
      />
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primaryLight h-20 w-20 rounded-full absolute md:left-[50px] -left-[10px] top-32"
      />
      <motion.img
        initial={{ rotate: -4 }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:w-44 w-32 lg:h-40 h-24 sm:flex hidden grayscale absolute rounded-xl bottom-[10%] right-[15%] z-10"
        src={require("../../../Assets/Images/about/moroccan-women.webp")}
        alt=""
      />
      <motion.img
        initial={{ rotate: 4 }}
        animate={{ rotate: [4, -4, 4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:w-44 w-36 h-28 lg:h-40 sm:flex hidden grayscale absolute rounded-xl bottom-[10%] left-[15%] z-10"
        src={require("../../../Assets/Images/about/sahara.webp")}
        alt=""
      />
    </div>
  );
}

export default JoinSection
