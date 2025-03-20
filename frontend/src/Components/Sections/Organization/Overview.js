import Campaign from "./Campaign";
const Overview = () => {
  return (
    <div className="flex  rounded-xl m-2 bg-white">
      <div className="flex gap-5">
        <Campaign />
        <Campaign />
        <Campaign />
        <Campaign />
      </div>
    </div>
  );
};

export default Overview;
