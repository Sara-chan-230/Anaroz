import NavBar from "../../Components/Sections/Organization/NavBar";
import Overview from "../../Components/Sections/Organization/Overview";
import TopBar from "../../Components/Sections/Organization/TopBar";
const Organization = () => {
  return (
    <div className="flex flex-col">
      <TopBar />
      
      <div className="w-full h-screen flex rounded-xl bg-white shadow-sm">
      <NavBar />
        <Overview />
      </div>
    </div>
  );
}

export default Organization
