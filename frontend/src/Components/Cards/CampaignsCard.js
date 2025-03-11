import { Link } from "react-router-dom";
const CampaignsCard = () => {
  return (
    <div className="w-full h-[80px] flex gap-2 ">
      <div className="w-[40%]">
        <img
          className="rounded-md w-full h-full"
          src={require("../../Assets/Images/about/earthquake.webp")}
          alt=""
        />
      </div>
      <div className="flex flex-col w-[60%] h-full justify-center">
             <h1>Homes of Hope – Rebuilding Lives Together</h1>
              <Link className="text-xs text-blue-600" to="">About Campaign</Link>
      </div>
    </div>
  );
}

export default CampaignsCard
