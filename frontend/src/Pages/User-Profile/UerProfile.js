import NabSection from "../../Components/Sections/UserProfile/NabSection";
import ProfilSection from "../../Components/Sections/UserProfile/ProfilSection";
import SettingSection from "../../Components/Sections/UserProfile/SettingSection";
import AmoutSection from "../../Components/Sections/UserProfile/AmoutSection";
import HelpCallSection from "../../Components/Sections/UserProfile/HelpCallSection";

const UerProfile = () => {
  return (
    <div className="bg-lightBg grid w-screen ">
      <NabSection />
      <div className="relative grid grid-cols-[25vw_auto_20vw] gap-x-8  px-8 pb-10">
      <ProfilSection />
      <SettingSection />
      <HelpCallSection />
      </div>
    </div>
  );
};

export default UerProfile;
