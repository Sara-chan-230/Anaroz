import HeroSection from "../../Components/Sections/Campaigns/HeroSection";
import { useEffect } from "react";
import Campaign from "../../Components/Cards/Campaign";
const Campaigns = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="flex flex-col gap-48">
      <HeroSection />
      <Campaign />
      <div></div>
    </div>
  );
};

export default Campaigns;
