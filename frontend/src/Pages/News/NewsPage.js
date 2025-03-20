import NavSection from "../../Components/Sections/News/NavSection";
import LeftBar from "../../Components/Sections/News/LeftBar";
import Post from "../../Components/Sections/News/Post";
import RightBar from "../../Components/Sections/News/RightBar";
const New = () => {
  return (
    <div className="bg-lightBg grid relative w-screen">
      <NavSection />
      <main className="relative top-24">
        <div className="relative grid grid-cols-[20vw_auto_20vw] gap-x-8 px-8">
          <LeftBar />
          <div className="space-y-8 pb-36">
            <Post />
            <Post />
            <Post />
          </div>
          <RightBar />
        </div>
      </main>
    </div>
  );
};

export default New;
