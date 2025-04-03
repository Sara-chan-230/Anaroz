import { useState } from "react";
import { Link } from "react-router-dom";
import volunteer from "../../../Assets/Images/register/volunteer.webp";
import aid from "../../../Assets/Images/register/take-care.webp";
import sunrise from "../../../Assets/Images/register/sunrise.webp";
import donate from "../../../Assets/Images/register/donate.webp";
import map from "../../../Assets/Images/register/map.webp";
const YourComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-lightBg">
      <div className="w-4/5 h-[90%] flex justify-between items-center overflow-hidden rounded-xl bg-white shadow-lg relative">
        <div className=" flex justify-center items-center w-[50%]">
          <form className="w-[80%] flex flex-col gap-5 justify-center items-center">
            <h1 className="text-2xl font-bold text-center">
              Log in to{" "}
              <Link
                to="/"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-secondary"
              >
                ANaroz
              </Link>
            </h1>
            <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full outline-none pl-2"
              />
            </div>
            <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none pl-2"
              />
            </div>
            <a href="#" className="text-blue-600 font-bold">
              Forgot the password?
            </a>
            <div className="w-full h-10 flex justify-center items-center bg-secondary rounded-md">
              <button className="text-white font-bold w-full h-full">
                Login
              </button>
            </div>
            <div className="flex gap-3">
              <hr className="w-full" /> <p>OR</p> <hr />
            </div>
            <div className="w-full border border-zinc-400 font-bold rounded-md h-10 flex justify-center items-center cursor-pointer">
              Sign in with Google
            </div>
          </form>
        </div>
        <div className=" w-[50%] h-full z-10 bg-black rounded-xl grid grid-rows-3 grid-cols-3 gap-3 p-2">
          <div
            style={{ backgroundImage: `url(${volunteer})` }}
            className=" p-4 col-span-2 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${aid})` }}
            className="bg-blue-500 p-4 rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${donate})` }}
            className=" p-4  rounded-xl bg-cover bg-center brightness-75"
          ></div>
          <div
            style={{ backgroundImage: `url(${sunrise})` }}
            className=" p-4 rounded-xl bg-cover bg-center brightness-75 "
          ></div>
          <div
            style={{ backgroundImage: `url(${map})` }}
            className="p-4  rounded-xl bg-cover bg-center brightness-75 row-span-2"
          ></div>

          <div className="bg-secondary col-span-2 p-4 rounded-xl shadow-lg text-white flex flex-col items-start justify-end space-y-3">
            <p className="text-xs">
              Anaroz: Empowering Organizations, Transforming Lives is our Goal
            </p>
            <h1 className="text-lg font-semibold">
              Log in now to get started!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
