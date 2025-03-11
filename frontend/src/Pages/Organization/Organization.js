import Campaign from "../../Components/Sections/Organization/Campaign";
import NavBar from "../../Components/Sections/Organization/NavBar";
import Overview from "../../Components/Sections/Organization/Overview";
const Organization = () => {
  return (
    <div className="bg-lightBg flex gap-2 ">
      <NavBar />
      <Overview />
    </div>
  )
}

export default Organization
