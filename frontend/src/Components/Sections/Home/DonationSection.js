const DonationSection = () => {
  return (
    <div className="flex bg-primary items-center justify-center relative">
      <div className="flex flex-col justify-center items-center gap-5 lg:pb-32 lg:pt-24 pb-16 pt-10  md:pb-20 md:pt-16 relative">
        <div className="flex gap-3 flex-col">
          <h1 className="md:text-2xl text-base font-bold text-white ">
            Your Contribution, Their Transformation:
          </h1>
          <h1 className="md:text-2xl text-base font-bold text-white ">
            Empowering Lives Through Generosity
          </h1>
        </div>
        <button className="md:text-base text-sm py-2 px-4 border rounded-md  border-white text-white">
          Donate Now
        </button>
        {/* Adding more geometric forms */}
        <div className="absolute top-10 left-10 w-14 h-14 bg-secondaryLight rounded-lg opacity-50"></div>
        <div className="absolute bottom-5 left-16 w-10 h-10 bg-accent rounded-full opacity-70"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-pink-400 rounded-lg opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary rounded-full opacity-55"></div>
        <div className="absolute top-32 left-20 w-10 h-10 bg-primaryLight rounded-lg opacity-65"></div>
        <div className="absolute top-5 right-10 w-8 h-8 bg-primary rounded-full opacity-75"></div>
        <div className="absolute bottom-12 left-24 w-14 h-14 bg-accentLight rounded-lg opacity-60"></div>
        <div className="absolute bottom-28 right-32 w-20 h-20 bg-secondaryDark rounded-full opacity-50"></div>
      </div>
      <img
        className="w-1/5 absolute bottom-0 left-0"
        src={require("../../../Assets/Images/home/helping-hand.webp")}
        alt=""
      />
      <img
        className="w-1/5 absolute scale-x-[-1] bottom-0 right-0"
        src={require("../../../Assets/Images/home/helping-hand.webp")}
        alt=""
      />
    </div>
  );
};

export default DonationSection;
