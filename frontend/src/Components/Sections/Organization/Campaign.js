const Campaign = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <div className="w-[300px] h-[450px] flex flex-col items-center rounded-2xl shadow-lg relative">
        <span className="absolute w-[150px] flex items-center justify-center h-[150px] top-[-10px] left-[-10px]  overflow-hidden">
          <span className="w-[150%] absolute h-[40px] z-10 bg-secondary -rotate-45 translate-y-[-20px] translate-x-[-20px] flex items-center justify-center shadow-[0_5px_10px_rgba(0,0,0,0.05)] text-white ">
            Education
          </span>
          <span className="absolute w-[10px] h-[10px] bottom-[12px] -z-10 left-0 bg-primaryLight"></span>
          <span className="absolute w-[10px] h-[10px] top-0 -z-10 right-[12px] bg-primaryLight"></span>
        </span>
        <div className="h-[50%] w-full relative">
          <img
            className="w-full h-full rounded-tl-2xl rounded-tr-2xl "
            src={require("../../../Assets/Images/about/earthquake.webp")}
            alt=""
          />
          <div className="w-[60px] h-[60px] flex items-center justify-center absolute bottom-[10px] right-[10px] rounded-full border border-white">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full text-sm font-semibold bg-white text-secondary">
              80%
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[50%] flex flex-col justify-center items-center gap-5">
          <h1 className="font-semibold">
            Homes of Hope – Rebuilding Lives Together
          </h1>
          <div className="relative w-full h-[10px]">
            <div className="h-full w-full bg-gray rounded-full"></div>
            <div className="h-full w-[80%] bg-secondary rounded-full absolute left-0 top-0"></div>
          </div>
          <div className="flex gap-[5px] w-full">
            <button className="w-[40%] rounded-[3px] border text-sm text-secondary border-secondary py-[8px]">
              Donate
            </button>
            <button className="w-[60%] rounded-[3px] border text-sm text-white bg-secondary py-[8px]">
              view Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
