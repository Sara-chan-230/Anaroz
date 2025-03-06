import { motion } from "framer-motion";

const UserCard = ({ bgColor, title,txt, description, icon, motionProps }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: motionProps.y }}
      transition={{ duration: motionProps.duration, ease: motionProps.ease }}
      viewport={{ once: true }}
      className={`lg:w-[30%] sm:w-[40%] lg:h-[500px] h-[400px] ${bgColor} rounded-xl lg:p-10 p-5 flex justify-center items-center`}
    >
      <div className="text-white flex flex-col gap-5">
        <i className={`${icon} lg:text-3xl text-xl`}></i>
              <h1 className="lg:text-2xl text-xl font-semibold">{title}</h1>
              <p className="lg:text-base text-sm">{txt}</p>
        {description.map((text, idx) => (
          <p className="lg:text-base text-xs" key={idx}>
            <i className="fa-solid fa-hand-point-right text-white pr-2"></i>
            {text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default UserCard;
