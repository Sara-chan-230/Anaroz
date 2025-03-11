const NavBar = () => {
  return (
    <nav className="flex flex-col items-center gap-8 h-screen w-[20%] pt-4 ">
      <div className="flex gap-1 justify-center items-center">
        <img
          className="w-[40px]"
          src={require("../../../Assets/Images/Logo/fav.png")}
          alt=""
        />
        <span className="text-2xl">ANaroz</span>
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className=" uppercase text-lg tracking-widest">Menu</h1>
        <div className="flex flex-col justify-end gap-5">
          <div className="flex gap-2 justify-start items-center mr-2">
            <i className="bi bi-grid text-secondary text-lg"></i>
            <span className="text-secondary font-semibold">Overview</span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <i className="bi bi-flag"></i>
            <span>Campaigns</span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <i className="bi bi-file-post"></i>
            <span>Posts</span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <i className="bi bi-menu-down"></i> <span>Contributions</span>
          </div>
        </div>
        <h1 className=" uppercase text-lg tracking-widest">Profil</h1>
        <div className="flex gap-2 justify-start items-center mr-2">
          <i className="bi bi-gear"></i> <span>Settings</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
