import Campaign from "./Campaign";
import Donors from "./Rapport";

const Overview = () => {
  
  return (
    <div className="flex flex-col gap-8 mt-28 ml-[15%]">
      <div className="flex px-6 gap-6 items-end">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Your Campaigns</h3>
          </div>
          <div className="flex gap-3">
            <Campaign />
            <Campaign />
            <Campaign />
          </div>
        </div>
        <Donors />
      </div>
    </div>
  );
};

export default Overview;
