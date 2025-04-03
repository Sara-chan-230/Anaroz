import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar.js";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Campaigns from "./Pages/Campaigns/Campaings.js";
import Footer from "./Components/Common/Footer/Footer.js";
import Signinup from "./Pages/Signin-Signup/Signinup.js";
import New from "./Pages/News/NewsPage.js";
import Organization from "./Pages/Organization/Organization.js";
import UerProfile from "./Pages/User-Profile/UerProfile.js";
import HelpCallMap from "./Pages/Map/HelpCallMap.js";
import Overview from "./Components/Sections/Organization/Overview.js";
import CampaignsPage from "./Components/Sections/Organization/CampaingsPage.js";
import SettingsPage from "./Components/Sections/Organization/SettingsPage.js";
import OrgLogin from "./Components/Sections/Organization/OrgLogin.js";

function App() {
  const locations = [
    {
      lat: 33.57311,
      lng: -7.589843,
      description:
        "Family of 5 trapped in damaged building after earthquake. Need urgent medical assistance and temporary shelter.",
      degree: "high",
    },
    {
      lat: 34.020882,
      lng: -6.849813,
      description:
        "Elderly woman with diabetes needs insulin delivery - pharmacy closed due to flooding in area.",
      degree: "medium",
    },
    {
      lat: 30.427755,
      lng: -8.018025,
      description:
        "Lost all belongings in fire. Need clothing and food for 2 children (ages 3 and 7).",
      degree: "low",
    },
    {
      lat: 34.040863,
      lng: -5.813629,
      description:
        "Disabled person needs wheelchair repair assistance - cannot leave home without it.",
      degree: "medium",
    },
    {
      lat: 31.629472,
      lng: -9.598107,
      description:
        "Single mother with newborn baby needs baby formula and diapers urgently.",
      degree: "high",
    },
    {
      lat: 33.886917,
      lng: -6.066763,
      description:
        "Flooding in home - need help moving furniture to higher ground before next rain.",
      degree: "low",
    },
    {
      lat: 31.508493,
      lng: -7.981894,
      description:
        "Fisherman lost boat in storm - only source of income. Need temporary work or assistance.",
      degree: "medium",
    },
    {
      lat: 33.522806,
      lng: -5.538941,
      description:
        "Student stranded in snowstorm - need ride to nearby shelter before nightfall.",
      degree: "high",
    },
    {
      lat: 34.25405,
      lng: -6.771586,
      description: "I need flokaa.",
      degree: "high",
    },
    {
      lat: 34.681962,
      lng: -4.423915,
      description:
        "Family displaced by flooding needs temporary housing for 1 week until home is repaired.",
      degree: "low",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/signup" element={<Signinup />} />
        <Route path="/news" element={<New />} />

        <Route path="/organization" element={<Organization />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="login" element={<OrgLogin />} />

        <Route path="/profile" element={<UerProfile />} />
        <Route path="/map" element={<HelpCallMap locations={locations} />} />

        {/* General Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/campaigns" element={<Campaigns />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
