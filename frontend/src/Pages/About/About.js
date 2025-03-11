import { useEffect } from "react";
import HeroSection from "../../Components/Sections/About/HeroSection";
import UsersSection from "../../Components/Sections/About/UsersSection";
import JoinSection from "../../Components/Sections/About/JoinSection";
import WhyChooseUs from "../../Components/Sections/About/WhyChooseUs";
import Testimonial from "../../Components/Sections/About/Testimonial";
import OurTeamSection from "../../Components/Sections/About/OurTeamSection";
const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="pt-28 flex flex-col gap-48">
      <HeroSection />
      <UsersSection />
      <div></div>
      <JoinSection />
      <WhyChooseUs />
      <Testimonial />
      <OurTeamSection />
      <div></div>
    </div>
  );
};

export default About;
