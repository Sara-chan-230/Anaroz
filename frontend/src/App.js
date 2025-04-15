import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Common/Navbar/Navbar.js";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
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
import PostPage from "./Components/Sections/Organization/PostPage.js";
import CampaignPage from "./Pages/CampaignPage/CampaignPage.js";
import NotFound from "./Pages/NotFound.js";
import BuyHope from "./Components/Sections/UserProfile/BuyHope.js";

function App() {
  

  const { user } = useSelector((state) => state.auth);
  const { org } = useSelector((state) => state.orgauth);
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route
          path="/signup"
          element={!user ? <Signinup /> : <Navigate to="/" />}
        />
        <Route path="/buyhope" element ={user ? <BuyHope /> : <Navigate to="/signup"/>} />
        <Route path="/news" element={user ? <New /> : <Navigate to="/" />} />

        <Route
          path="/organization/:id"
          element={org ? <Organization /> : <Navigate to="/" />}
        >
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="posts" element={<PostPage />} />
        </Route>
        <Route
          path="login"
          element={!user ? <OrgLogin /> : <Navigate to="/" />}
        />

        <Route path="/map" element={<HelpCallMap />} />

        {/* General Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route
                  path="/campaigns/details/:idCamp"
                  element={<CampaignPage />}
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/profile/:id"
                  element={user ? <UerProfile /> : <Navigate to="/" />}
                />
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
