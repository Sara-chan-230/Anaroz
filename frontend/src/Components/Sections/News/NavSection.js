const NavSection = () => {
  return (
    <nav className="flex fixed top-0 left-0 w-full justify-between px-5 items-center mx-auto bg-white h-[80px]">
      <div className="flex items-center">
        <img
          className="w-[50px]"
          src={require("../../../Assets/Images/Logo/fav.png")}
          alt=""
        />
        <h1 className="text-4xl font-semibold ">aroz</h1>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div>
          <i class="bi bi-house-fill text-2xl text-gray"></i>{" "}
        </div>
        <div>
          <i class="bi bi-newspaper text-2xl text-gray"></i>
        </div>
        <div>
          <i className="bi bi-megaphone-fill text-gray text-2xl"></i>{" "}
        </div>
        <input
          type="search"
          placeholder="Search post"
          className="w-80 outline-none pl-2 rounded-md h-10 flex items-center bg-lightBg"
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center">
          <i class="bi bi-bell-fill text-2xl"></i>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <img
            className="w-full h-full rounded-full"
            src={require("../../../Assets/Images/about/news.webp")}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
