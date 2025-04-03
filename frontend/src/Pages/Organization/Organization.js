import NavBar from "../../Components/Sections/Organization/NavBar";
import TopBar from "../../Components/Sections/Organization/TopBar";
import { Outlet } from "react-router-dom";

const Organization = () => {
  return (
    <div className="flex flex-col">
      <TopBar />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Organization;
