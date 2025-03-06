import { useEffect } from "react";
import HeroSection from "../../Components/Sections/Home/HeroSection";
import InvitationSection from "../../Components/Sections/Home/InvitationSection";
import AffectedSection from "../../Components/Sections/Home/AffectedSection";
import MapSection from "../../Components/Sections/Home/MapSection";
import NewsSection from "../../Components/Sections/Home/NewsSection";
import DonationSection from "../../Components/Sections/Home/DonationSection";
import AboutSection from "../../Components/Sections/Home/AboutSection";
import SupporterSection from "../../Components/Sections/Home/SupporterSection";
const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <div className="flex flex-col gap-48">
        <HeroSection />
        <InvitationSection />
        <AffectedSection />
        <MapSection />
        <NewsSection />
        <DonationSection />
        <AboutSection />
        <SupporterSection />
      </div>
    );
}
 
export default Home;