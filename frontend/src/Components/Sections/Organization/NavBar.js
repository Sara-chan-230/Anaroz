const NavBar = () => {
  return (
    <nav className="flex flex-col items-center gap-8 h-screen w-[5%] bg-zinc-100 pt-4 ">   
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col justify-end gap-5 text-zinc-600">
            <i className="bi bi-grid text-secondary text-2xl"></i>
            <i className="bi bi-flag  text-2xl"></i>
            <i className="bi bi-file-post text-2xl"></i>
            <i className="bi bi-menu-down text-2xl"></i> 
        </div>
          <i className="bi bi-gear text-2xl"></i>
      </div>
    </nav>
  );
};

export default NavBar;
