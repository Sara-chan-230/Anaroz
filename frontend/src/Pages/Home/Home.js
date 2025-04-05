import { motion } from "framer-motion";
import { useEffect } from "react";
import HeroSection from "../../Components/Sections/Home/HeroSection";
import InvitationSection from "../../Components/Sections/Home/InvitationSection";
import AffectedSection from "../../Components/Sections/Home/AffectedSection";
import MapSection from "../../Components/Sections/Home/MapSection";
import NewsSection from "../../Components/Sections/Home/NewsSection";
import DonationSection from "../../Components/Sections/Home/DonationSection";
import AboutSection from "../../Components/Sections/Home/AboutSection";
import SupporterSection from "../../Components/Sections/Home/SupporterSection";
import Section from "../../Components/Sections/Home/Section";

// Import scroll variants
import {
  scrollSlideUp,
  scrollSlideLeft,
  scrollScaleIn,
  scrollParallax,
  scrollFlip,
  scrollStretch,
  scrollBounce,
} from "../../Animations/ScrollAnimation";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-64">
      <HeroSection />

        <Section />


      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollSlideLeft}
      >
        <InvitationSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollScaleIn}
      >
        <AffectedSection />
      </motion.div>
      <div></div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "-100px" , once : true}}
        variants={scrollParallax}
      >
        <MapSection />
      </motion.div>

      <div></div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={scrollFlip}
      >
        <NewsSection />
      </motion.div>

      <div></div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollBounce}
      >
        <DonationSection />
      </motion.div>

      <AboutSection />

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollStretch}
      >
        <SupporterSection />
      </motion.div>
    </div>
  );
};

export default Home;
