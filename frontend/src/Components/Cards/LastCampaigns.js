import { Link } from "react-router-dom";
const LastCampaigns = () => {
  return (
      <div className="flex flex-col gap-3 w-80 rounded-xl shadow-lg pb-3">
        <div className="relative w-fit">
          <img
            className="max-w-80 min-w-80 min-h-60 max-h-60 rounded-t-xl"
            src={require("../../Assets/Images/home/Help.webp")}
            alt=""
          />
          <div className="rounded-t-xl p-5 flex justify-end absolute w-full h-full top-0 left-0 bg-[#00000066]">
            <Link
              to="/"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <i className="fa-solid fa-arrow-right -rotate-45"></i>
            </Link>
          </div>
          <div className="w-fit bg-secondary rounded-full px-4 py-1 absolute -bottom-3 left-[5%]">
            <h1 className="text-white text-sm">Education</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <h1 className="text-xl font-bold">
            Raise funds for building a school in a rural area
          </h1>
          <p className="text-xs text-slate-700">
            More than 200 child in the rural area don't...
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-sm mt-auto">
              <span className="text-lg font-bold pr-2 text-black">1.000$</span>{" "}
              raised of <span>5.000</span> $ goal
            </p>

            <div className="relative">
              <div className="h-3 w-full bg-gray rounded-full"></div>
              <div className="h-3 w-2/5 bg-secondary rounded-full absolute left-0 top-0"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-heart text-red"></i>
            <p className="text-slate-400 text-sm">
              <span>15.000</span> suporters
            </p>
          </div>
        </div>
      </div>

  );
};

export default LastCampaigns;
