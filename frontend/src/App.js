import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
