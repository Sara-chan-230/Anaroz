import { Link } from "react-router-dom";
import getCategoryColor from "../../Utils/CategoryColor";
const Campaign = ({ campaign }) => {
  const categoryColor = getCategoryColor(campaign.category); // Get the color for the category

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[260px] h-[390px] flex flex-col items-center rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Ribbon */}
        <span className="absolute w-[140px] flex items-center justify-center h-[140px] top-[-12px] left-[-12px] overflow-hidden">
          <span
            className="w-[150%] capitalize absolute h-[38px] z-10 bg-secondary -rotate-45 translate-y-[-20px] translate-x-[-20px] flex items-center justify-center shadow-md text-white text-xs font-medium"
            style={{ backgroundColor: categoryColor }} // Apply the dynamic category color
          >
            {campaign.category}
          </span>
          <span className="absolute w-[12px] h-[12px] bottom-[14px] -z-10 left-0 bg-primaryLight"></span>
          <span className="absolute w-[12px] h-[12px] top-0 -z-10 right-[14px] bg-primaryLight"></span>
        </span>

        {/* Image Section */}
        <div className="h-[48%] w-full relative">
          <img
            className="w-full h-full rounded-tl-xl rounded-tr-xl object-cover"
            src={campaign.image}
            alt="Campaign"
          />
          <div className="w-[54px] h-[54px] flex items-center justify-center absolute bottom-[12px] right-[12px] rounded-full border-2 border-white">
            <div style={{ color: categoryColor }} className="w-[46px] h-[46px] flex items-center justify-center rounded-full text-xs font-semibold bg-white text-secondary">
            {Math.floor((campaign.wallet / campaign.budget) * 100)}%

            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-[90%] h-[52%] flex flex-col justify-center items-center gap-3 py-2">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[13px] leading-tight">
              {campaign.title}
            </h1>
            <p className="text-[11px] leading-snug text-gray-600 line-clamp-1">
              {campaign.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-[10px] mt-1">
            <div className="h-[10px] w-full bg-lightGray rounded-full"></div>
            <div
              className={`h-full w-[${
                Math.floor((campaign.wallet / campaign.budget) * 100)
              }%] bg-secondary rounded-full absolute left-0 top-0`}
              style={{ backgroundColor: categoryColor }}
            ></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 w-full mt-2">
            <Link to={`/campaigns/details/${campaign._id}`} className="w-[40%]">
              <button
                className="w-full rounded-sm border text-xs font-medium text-white py-[6px] hover:bg-opacity-80 transition-colors"
                style={{ backgroundColor: categoryColor }} // Apply the dynamic category color
              >
                Donate
              </button>
            </Link>
            <Link to={`/campaigns/details/${campaign._id}`} className="w-[60%]">
              <button
                className="w-full rounded-[3px] border text-xs font-medium text-white py-[6px] hover:bg-opacity-80 transition-colors"
                style={{ backgroundColor: categoryColor }} 
              >
                View Campaign
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
