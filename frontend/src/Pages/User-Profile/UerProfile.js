import ProfilSection from "../../Components/Sections/UserProfile/ProfilSection";
import SettingSection from "../../Components/Sections/UserProfile/SettingSection";
import AmoutSection from "../../Components/Sections/UserProfile/AmoutSection";
import HelpCallSection from "../../Components/Sections/UserProfile/HelpCallSection";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UerProfile = () => {
  const {user} = useSelector((state)=>state.auth)
  const {id} = useParams();

  return (
    <div className="bg-lightBg grid w-screen ">
      <div className="relative grid grid-cols-[25vw_auto_20vw] gap-x-8  px-8 pb-10">
      <ProfilSection />
      <SettingSection />
      {user.rule === "affected person" ? <HelpCallSection /> : <AmoutSection />}
      </div>
    </div>
  );
};

export default UerProfile;
