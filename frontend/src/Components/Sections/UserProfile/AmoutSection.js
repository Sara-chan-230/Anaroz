import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AmoutSection = () => {
    const {user} = useSelector((state)=>state.auth)
  return (
    <div className="bg-white mt-24 rounded-md overflow-hidden relative">
      <div className="bg-blue-400 flex flex-col gap-4 items-center justify-center py-10 rounded-md">
        <div className="w-[131px] h-[131px] rounded-full border-2 border-lightBlue flex justify-center items-center relative group-hover:border-[#D0E8FF] group-hover:bg-[#A3C8FF] transition-all ease-out duration-300">
          <div className="bg-lightBlue w-[118px] h-[118px] rounded-full flex justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="23 29 78 60"
              height="60px"
              width="78px"
              className="z-[10] group-hover:z-[10000]"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <g
                transform="translate(23, 29.5)"
                fillRule="evenodd"
                fill="none"
                strokeWidth="1"
                stroke="none"
              >
                <rect
                  rx="4.7"
                  height="21.87"
                  width="9.4"
                  y="26.03"
                  x="67.83"
                  fill="#4A90E2"
                ></rect>
                <rect
                  rx="4.7"
                  height="10.96"
                  width="9.4"
                  y="38.77"
                  x="67.83"
                  fill="#4A90E2"
                ></rect>
                <polygon
                  points="57.3 0 67.16 26.37 14.44 45.06 4.58 18.69"
                  fill="#4A90E2"
                ></polygon>
                <path
                  fill="#A3C8FF"
                  d="M0,19.61 C0,16.29 2.68,13.60 5.99,13.60 L67.64,13.60 C70.95,13.60 73.63,16.28 73.63,19.61 L73.63,52.66 C73.63,55.98 70.95,58.67 67.64,58.67 L5.99,58.67 C2.68,58.67 0,55.98 0,52.66 L0,19.61 Z"
                ></path>
                <path
                  fill="#F6F1FF"
                  d="M47.51,27.08 C45.00,24.53 40.93,24.53 38.42,27.08 L36.90,28.61 L35.39,27.08 C32.87,24.53 28.80,24.53 26.29,27.08 C23.78,29.62 23.78,33.75 26.29,36.30 L36.90,47.05 L47.51,36.30 C50.02,33.75 50.02,29.62 47.51,27.08"
                ></path>
              </g>
            </motion.svg>
          </div>
        </div>
        <h3 className="text-xl text-lightBlue font-semibold">{user.hope_piece} HP</h3>
      </div>

      <div className="p-6 text-center bg-gray-50 rounded-b-md">
        <h2 className="text-2xl font-bold text-blue-500">Support the Cause</h2>
        <p className="mt-2 ">
          You can make a difference! Buy{" "}
          <span className="font-semibold text-blue-600">Hope Pieces</span> to
          help people in need through Anaroz.
        </p>
        <Link to="/buyhope">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Buy Hope Pieces
          </motion.button>
        </Link>
      </div>

      <div className="absolute bottom-10 left-10 w-10 h-10 bg-green-400 rounded-lg opacity-20"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 bg-orange-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-14 w-6 h-6 bg-pink-700 opacity-15"></div>
      <div className="absolute bottom-4 left-24 w-10 h-10 bg-amber-400 rounded-full opacity-20"></div>
    </div>
  );
};

export default AmoutSection;
