const DonationSection = () => {
  return (
    <div className="flex bg-primary items-center justify-center relative">
      <div className="flex flex-col justify-center items-center gap-5 lg:pb-32 lg:pt-24 pb-16 pt-10  md:pb-20 md:pt-16  ">
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
