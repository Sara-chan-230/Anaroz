import { easeInOut, motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div className="w-screen lg:flex flex-col justify-center items-center relative mb-64 hidden">
      {/* Our vision */}
      <div className="flex items-center ">
        <div className="w-[100px] h-[200px] flex items-center justify-center rounded-r-full bg-primaryLight relative">
          <h1 className="text-white text-5xl">1</h1>
          <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full border border-primaryLight absolute -left-[24px]">
            <i className="fa-solid fa-location-crosshairs text-2xl text-primaryLight"></i>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "450px" }}
            transition={{ duration: 0.8, ease: easeInOut }}
            viewport={{ once: true }}
            className="flex flex-col px-10 py-6 gap-2 w-[450px] min-h-[130px] max-h-[130px] border-y border-l border-primaryLight rounded-l-2xl absolute right-[100%]"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-primaryLight text-2xl font-bold"
            >
              Our vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOut }}
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
            <i className="fa-solid fa-bolt text-secondary text-2xl"></i>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "550px" }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className="flex flex-col px-10 py-6 gap-2 w-[550px] min-h-[130px] max-h-[130px] border-y border-r border-secondary rounded-r-2xl absolute left-[100%]"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-secondary text-2xl font-bold"
            >
              Our mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOut }}
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
            <i className="fa-solid fa-location-dot text-purple text-2xl"></i>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "450px" }}
            transition={{ duration: 0.8, ease: easeInOut }}
            viewport={{ once: true }}
            className="flex flex-col px-10 py-6 gap-2 w-[450px] min-h-[130px] max-h-[130px] border-y border-l border-purple rounded-l-2xl absolute right-[100%]"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-purple text-2xl font-bold"
            >
              Our goal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-sm"
            >
              To build an inclusive platform ensuring timely frequente
              assistance and lasting change
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
