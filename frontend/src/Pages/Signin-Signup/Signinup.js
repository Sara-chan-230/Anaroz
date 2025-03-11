import { motion } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import { useState} from "react";
import volunteer from "../../Assets/Images/register/volunteer.webp";
import aid from "../../Assets/Images/register/take-care.webp";
import hope from "../../Assets/Images/register/hope.webp";
import sunrise from "../../Assets/Images/register/sunrise.webp";
import donate from "../../Assets/Images/register/donate.webp";
import news from "../../Assets/Images/register/news.webp";
import map from "../../Assets/Images/register/map.webp";
const YourComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-lightBg">
      <div className="w-4/5 h-[90%] flex justify-around items-center overflow-hidden rounded-xl bg-white shadow-lg relative">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLogin ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          className="w-[35%]"
        >
          <Login />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLogin ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          className="w-[35%]"
        >
          <Signup />
        </motion.div>

        <motion.div
          style={{ willChange: "transform" }}
          className="absolute top-0 left-0 w-full h-full z-10 bg-black rounded-xl grid grid-rows-4 grid-cols-4 gap-3 p-2"
          initial={{ x: "50%" }}
          animate={{ x: isLogin ? "-50%" : "50%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div
            style={{ backgroundImage: `url(${volunteer})` }}
            className=" p-4 row-span-2 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${aid})` }}
            className="bg-blue-500 p-4 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${donate})` }}
            className=" p-4 row-span-2 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${sunrise})` }}
            className=" p-4 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${map})` }}
            className="p-4 row-span-2 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div className="bg-teal-500  row-span-2 p-4 rounded-xl shadow-lg text-white flex flex-col items-start justify-end space-y-3">
            <h1 className="text-lg font-semibold">
              Already have an account on Anaroz?
            </h1>
            <p className="text-xs">
              Log in to access your dashboard and explore all our features!
            </p>
            <button
              onClick={() => {
                setIsLogin(false);
              }}
              className="bg-green-700  text-white py-2 px-8 rounded-lg font-medium text-sm hover:bg-green-900 transition duration-300"
            >
              Log in
            </button>
          </div>
          <div className="bg-secondary row-span-2 p-4 rounded-xl shadow-lg text-white flex flex-col items-start justify-end space-y-3">
            <h1 className="text-lg font-semibold">
              Don't have an account on Anaroz yet?
            </h1>
            <p className="text-xs">
              Create one now to access all the features!
            </p>
            <button
              onClick={() => {
                setIsLogin(true);
              }}
              className="bg-green-600 text-white py-2 px-8 rounded-lg font-medium text-sm hover:bg-green-700 transition duration-300"
            >
              Sign up
            </button>
          </div>
          <div
            style={{ backgroundImage: `url(${news})` }}
            className="bg-indigo-500 p-4 row-span-2 rounded-lg bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${sunrise})` }}
            className="bg-indigo-500 p-4 bg-cover bg-center brightness-75 rounded-xl"
          ></div>
          <div
            style={{ backgroundImage: `url(${hope})` }}
            className="bg-indigo-500 p-4 rounded-xl bg-cover bg-center brightness-75"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default YourComponent;
