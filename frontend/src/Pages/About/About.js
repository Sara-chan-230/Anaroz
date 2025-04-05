import { motion } from "framer-motion";
import { useEffect } from "react";
import HeroSection from "../../Components/Sections/About/HeroSection";
import UsersSection from "../../Components/Sections/About/UsersSection";
import JoinSection from "../../Components/Sections/About/JoinSection";
import WhyChooseUs from "../../Components/Sections/About/WhyChooseUs";
import Testimonial from "../../Components/Sections/About/Testimonial";
import OurTeamSection from "../../Components/Sections/About/OurTeamSection";

import {
  scrollScaleIn,
  scrollFlip,
  scrollBounce,
} from "../../Animations/ScrollAnimation";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 flex flex-col gap-60">
      <HeroSection />

      <UsersSection />

      <div></div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollFlip}
      >
        <JoinSection />
      </motion.div>

      <WhyChooseUs />

      <div></div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollScaleIn}
      >
        <Testimonial />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={scrollBounce}
      >
        <OurTeamSection />
      </motion.div>

      <div></div>
    </div>
  );
};

export default About;
