import NavSection from "../../Components/Sections/News/NavSection";
import Campaigs from "../../Components/Sections/News/Campaigs";
const New = () => {
  return (
      <div className="bg-lightBg flex flex-col gap-10">
      <NavSection />
      <div className="mt-[110px] flex gap-10 px-8">
        <Campaigs />

      </div>
      
    </div>
  )
}

export default New
