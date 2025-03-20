const Campaign = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center ">
      <div className="w-[250px] h-[350px] flex flex-col items-center rounded-xl border border-gray relative">
        <div className="h-[50%] w-full relative">
          <img
            className="w-full h-full rounded-t-xl"
            src={require("../../../Assets/Images/about/earthquake.webp")}
            alt=""
          />
          <div className="w-[50px] h-[50px] flex items-center justify-center absolute bottom-[10px] left-[10px] rounded-full border border-white">
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-xs font-semibold bg-white text-secondary">
              80%
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1 shadow-md">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            EDUCATION
          </div>
          <span className="h-3 w-3 absolute top-[25px] right-1 rotate-45 bg-blue-600"></span>
        </div>
       <div className="h-1/2 flex flex-col justify-between items-center gap-5">
       <div className="w-[90%] h-full flex flex-col justify-end items-center gap-2 ">
          <h1 className="font-semibold text-sm text-center">
            Homes of Hope – Rebuilding Lives Together
          </h1>
          <button className="w-full h-8 text-xs text-secondary border border-secondary rounded-md">View Campaign</button>          
        </div>
        <div className="flex bg-lightBg w-full py-2 rounded-b-xl">
          <div className="flex flex-col justify-center items-center w-1/3">
            <span className="text-xs text-zinc-400">Raised</span>
            <span className="text-sm">50.000$</span>
          </div>
          <div className="flex flex-col justify-center items-center w-1/3 border-l border-r border-gray">
            <span className="text-xs text-zinc-400">Goal</span>
            <span className="text-sm">4.000$</span>
          </div>
          <div className="flex flex-col justify-center items-center w-1/3">
            <span className="text-xs text-zinc-400">Left</span>
            <span className="text-sm">23.000$</span>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Campaign;