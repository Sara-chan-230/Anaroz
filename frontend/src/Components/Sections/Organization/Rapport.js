import { useSelector } from "react-redux";

const Rapport = () => {
  const {campaigns} = useSelector((state)=>state.campaigns);
  const completed = campaigns.filter((cam)=>{
    return cam.wallet === cam.budjet;
  })
  return (
    <div className="w-64 hidden lg:block">
      <div className="bg-white p-4 rounded-lg shadow-xs border border-gray h-full flex flex-col">
        <h3 className="text-sm font-semibold mb-8 text-center">
          Campaign Progress
        </h3>

        <div className="flex-1 space-y-8">
          <div
            className="relative mx-auto W-[100px] h-[100px]"
          >
            <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#0866FF"
                strokeWidth="2"
                strokeDasharray="100 100"
                strokeDashoffset={100 - Number(completed.lenght/campaigns.length*100)}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-semibold text-gray-800">{completed.lenght}</span>
              <span className="text-xs text-gray-500 mt-0.5">Complete</span>
            </div>
          </div>

          {/* HP Metrics */}
          
           
            <div className="space-y-2">
            <div className="bg-blue-50 p-2 rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">
                  Completed Campaigns
                </span>
                <span className="text-base font-semibold text-blue-700">
                  {completed.length}
                </span>
              </div>
            </div>
            <div className="bg-orange-50 p-2 rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Total HP</span>
                <span className="text-base font-semibold text-orange-700">
                  82,450
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 p-2 rounded-md">
                <p className="text-[0.65rem] text-gray-500 mb-0.5 ">
                  Today's HP
                </p>
                <p className="text-sm font-semibold text-blue-600">1,240</p>
              </div>
              <div className="bg-green-50 p-2 rounded-md">
                <p className="text-[0.65rem] text-gray-500 mb-0.5">
                  New Donors
                </p>
                <p className="text-sm font-semibold text-green-600">24</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Rapport;
