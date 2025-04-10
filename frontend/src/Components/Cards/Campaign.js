import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[260px] h-[390px] flex flex-col items-center rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Ribbon */}
        <span className="absolute w-[140px] flex items-center justify-center h-[140px] top-[-12px] left-[-12px] overflow-hidden">
          <span className="w-[150%] absolute h-[38px] z-10 bg-secondary -rotate-45 translate-y-[-20px] translate-x-[-20px] flex items-center justify-center shadow-md text-white text-xs font-medium">
            Developpement
          </span>
          <span className="absolute w-[12px] h-[12px] bottom-[14px] -z-10 left-0 bg-primaryLight"></span>
          <span className="absolute w-[12px] h-[12px] top-0 -z-10 right-[14px] bg-primaryLight"></span>
        </span>

        {/* Image Section */}
        <div className="h-[48%] w-full relative">
          <img
            className="w-full h-full rounded-tl-xl rounded-tr-xl object-cover"
            src={require("../../Assets/Images/about/earthquake.webp")}
            alt="Campaign"
          />
          <div className="w-[54px] h-[54px] flex items-center justify-center absolute bottom-[12px] right-[12px] rounded-full border-2 border-white">
            <div className="w-[46px] h-[46px] flex items-center justify-center rounded-full text-xs font-semibold bg-white text-secondary">
              80%
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-[90%] h-[52%] flex flex-col justify-center items-center gap-3 py-2">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[13px] leading-tight">
              Homes of Hope – Rebuilding Lives Together
            </h1>
            <p className="text-[11px] leading-snug text-gray-600 line-clamp-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rem
              ipsum eligendi itaque nostrum fugiat, tempore laudantium, quod
              optio quia explicabo magni nulla iste inventore temporibus error
              necessitatibus libero voluptates?
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-[10px] mt-1">
            <div className="h-full w-full bg-lightGray rounded-full"></div>
            <div className="h-full w-[80%] bg-secondary rounded-full absolute left-0 top-0"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 w-full mt-2">
            <button className="w-[40%] rounded-sm border text-xs font-medium text-secondary border-secondary py-[6px] hover:bg-secondary hover:text-white transition-colors">
              Donate
            </button>
            <button className="w-[60%] rounded-[3px] border text-xs font-medium text-white bg-secondary py-[6px] hover:bg-secondary-dark transition-colors">
              View Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
