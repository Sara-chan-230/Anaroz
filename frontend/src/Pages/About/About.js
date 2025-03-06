import { useEffect } from "react";
import HeroSection from "../../Components/Sections/About/HeroSection";
import UsersSection from "../../Components/Sections/About/UsersSection";
import JoinSection from "../../Components/Sections/About/JoinSection";
import WhyChooseUs from "../../Components/Sections/About/WhyChooseUs";
const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="pt-32 flex flex-col gap-48">
      <HeroSection />
      <UsersSection />
      <div></div>
      <JoinSection />
      <WhyChooseUs />
      <div></div>
    </div>
  );
};

export default About;
