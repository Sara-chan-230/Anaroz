import { motion } from "framer-motion";
import HeroSection from "../../Components/Sections/Campaigns/HeroSection";
import CampaignsList from "../../Components/Sections/Campaigns/CampaignsList";
import { useEffect } from "react";

import {
  scrollSlideUp,

} from "../../Animations/ScrollAnimation";

const Campaigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <HeroSection />

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollSlideUp}
      >
        <CampaignsList />
      </motion.div>

      <div></div>
    </div>
  );
};

export default Campaigns;