import { Route, Routes} from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar.js";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Campaigns from "./Pages/Campaigns/Campaings.js";
import Footer from "./Components/Common/Footer/Footer.js";
import Signinup from "./Pages/Signin-Signup/Signinup.js";

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/signup" element={<Signinup />} />
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
