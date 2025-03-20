
import HeroSection from "../../Components/Sections/Campaigns/HeroSection";
import Campaign from "../../Components/Cards/Campaign";
import { useEffect } from "react";
const Campaigns = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-48">
      <HeroSection />
      <div className="flex gap-14 flex-wrap justify-start items-center">
        <Campaign />
        <Campaign />
        <Campaign />
        <Campaign />
      </div>
      <div></div>
    </div>
  );
};

export default Campaigns;
