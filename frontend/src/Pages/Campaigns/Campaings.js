import HeroSection from "../../Components/Sections/Campaigns/HeroSection";
import { useEffect } from "react";
const Campaigns = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="">
      <HeroSection />
    </div>
  );
};

export default Campaigns;
