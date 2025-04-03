import { easeInOut, motion } from "framer-motion";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const AboutSection = () => {
  return (
    <div className="w-screen lg:flex flex-col justify-center items-center relative mb-64 hidden">
      {/* Our vision */}
      <div className="flex items-center ">
        <div className="w-[100px] h-[200px] flex items-center justify-center rounded-r-full bg-primaryLight relative">
          <h1 className="text-white text-5xl">1</h1>
          <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full border border-primaryLight absolute -left-[24px]">
            <MyLocationRoundedIcon
              sx={{ width: "25px", height: "25px", color: "#08527A" }}
            />
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "450px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="flex flex-col px-10 py-6 gap-2 w-[450px] min-h-[130px] max-h-[130px] border-y border-l border-primaryLight rounded-l-2xl absolute right-[100%]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-primaryLight text-2xl font-bold"
            >
              Our vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm"
            >
              To create a compassionate world where help connects seamlessly
              with those in need
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Our mission */}
      <div className="flex items-center mr-[200px] absolute top-[82%]">
        <div className="w-[100px] h-[200px] flex items-center justify-center rounded-l-full bg-secondary relative">
          <h1 className="text-white text-5xl">2</h1>
          <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full border border-secondary absolute -right-[24px]">
            <BoltRoundedIcon
              sx={{ width: "30px", height: "30px", color: "#0866FF" }}
            />
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "550px" }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            viewport={{ once: true }}
            className="flex flex-col px-10 py-6 gap-2 w-[550px] min-h-[130px] max-h-[130px] border-y border-r border-secondary rounded-r-2xl absolute left-[100%]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-secondary text-2xl font-bold"
            >
              Our mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm"
            >
              Empowering communities through innovative solutions to provide
              swift and impactful support
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Our goal */}
      <div className="flex items-center absolute top-[328px]">
        <div className="w-[100px] h-[200px] flex items-center justify-center rounded-r-full bg-purple relative">
          <h1 className="text-white text-5xl">3</h1>
          <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full border border-purple absolute -left-[24px]">
            <LocationOnIcon
              sx={{ width: "30px", height: "30px", color: "#6136BA" }}
            />
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "450px" }}
            transition={{ type: "spring", stiffness: 110, damping: 15 }}
            viewport={{ once: true }}
            className="flex flex-col px-10 py-6 gap-2 w-[450px] min-h-[130px] max-h-[130px] border-y border-l border-purple rounded-l-2xl absolute right-[100%]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-purple text-2xl font-bold"
            >
              Our goal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm"
            >
              To build an inclusive platform ensuring timely frequent assistance
              and lasting change
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
        {/* Row 1 - Top */}
        <div className="absolute top-[10%] left-[5%] w-7 h-7 bg-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-[15%] right-[8%] w-9 h-9 bg-blue-300 transform rotate-12 opacity-25"></div>
        <div className="absolute top-[5%] left-[25%] w-10 h-4 bg-purple-300 rounded-full opacity-15"></div>

        {/* Row 2 */}
        <div className="absolute top-[25%] right-[15%] w-8 h-8 bg-amber-300 opacity-30 rounded-md"></div>
        <div className="absolute top-[30%] left-[15%] w-12 h-6 bg-teal-200 transform -rotate-6 opacity-20"></div>
        <div className="absolute top-[35%] right-[30%] w-5 h-5 bg-indigo-300 rounded-full opacity-25"></div>

        {/* Middle Area */}
        <div className="absolute top-[45%] left-[10%] w-9 h-9 bg-rose-200 opacity-20 rotate-45"></div>
        <div className="absolute top-[50%] right-[20%] w-7 h-7 bg-sky-300 rounded-full opacity-30"></div>
        <div className="absolute top-[55%] left-[30%] w-8 h-8 bg-emerald-200 opacity-25 rounded-lg"></div>

        {/* Lower Middle */}
        <div className="absolute top-[60%] right-[10%] w-6 h-10 bg-violet-300 opacity-20 transform rotate-12"></div>
        <div className="absolute top-[65%] left-[20%] w-11 h-6 bg-cyan-200 rounded-full opacity-15"></div>
        <div className="absolute top-[70%] right-[30%] w-7 h-7 bg-fuchsia-200 opacity-25 rotate-45"></div>

        {/* Bottom Area */}
        <div className="absolute bottom-[15%] left-[10%] w-8 h-8 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-[20%] right-[15%] w-9 h-5 bg-lime-200 opacity-25 rounded-md"></div>
        <div className="absolute bottom-[25%] left-[30%] w-6 h-9 bg-amber-200 transform -rotate-12 opacity-20"></div>

        {/* Very Bottom */}
        <div className="absolute bottom-[5%] right-[10%] w-7 h-7 bg-pink-300 opacity-30 rounded-full"></div>
        <div className="absolute bottom-[10%] left-[20%] w-10 h-4 bg-indigo-200 opacity-20"></div>
        <div className="absolute bottom-[8%] right-[25%] w-8 h-8 bg-teal-300 rounded-lg opacity-25 rotate-6"></div>

        {/* Special Floating Elements */}
        <div className="absolute top-[40%] left-[40%] w-14 h-14 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-15 animate-float-slow"></div>
        <div className="absolute bottom-[40%] right-[40%] w-12 h-12 bg-gradient-to-tr from-pink-200 to-rose-200 opacity-20 rounded-lg rotate-12"></div>
      </div>
    </div>
  );
};

export default AboutSection;
