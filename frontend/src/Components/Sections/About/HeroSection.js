import flood from "../../../Assets/Images/about/floods.webp";
import earthquake from "../../../Assets/Images/about/earthquake.webp";
const HeroSection = () => {
  return (
    <header className="flex flex-col gap-14">
      {/* vector elements */}
      <div className="absolute h-auto top-0 left-0 right-0 -z-20">
        <svg
          width="100%"
          viewBox="0 0 1512 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="-328" width="1512" height="466.496" fill="#F6F9FA" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 250.209L22.68 283.275C45.36 316.34 91.98 382.472 137.34 382.472C182.7 382.472 229.32 316.34 274.68 332.873C321.3 349.406 366.66 448.603 412.02 465.136C458.64 481.669 504 415.538 549.36 357.673C595.98 299.808 641.34 250.209 686.7 225.41C733.32 200.611 778.68 200.611 825.3 275.008C870.66 349.406 916.02 498.202 962.64 531.267C1008 564.333 1053.36 481.669 1099.98 465.136C1145.34 448.603 1190.7 498.202 1237.32 498.202C1282.68 498.202 1329.3 448.603 1374.66 415.538C1420.02 382.472 1466.64 365.939 1489.32 357.673L1512 349.406V151.012H1489.32C1466.64 151.012 1420.02 151.012 1374.66 151.012C1329.3 151.012 1282.68 151.012 1237.32 151.012C1190.7 151.012 1145.34 151.012 1099.98 151.012C1053.36 151.012 1008 151.012 962.64 151.012C916.02 151.012 870.66 151.012 825.3 151.012C778.68 151.012 733.32 151.012 686.7 151.012C641.34 151.012 595.98 151.012 549.36 151.012C504 151.012 458.64 151.012 412.02 151.012C366.66 151.012 321.3 151.012 274.68 151.012C229.32 151.012 182.7 151.012 137.34 151.012C91.98 151.012 45.36 151.012 22.68 151.012H0V250.209Z"
            fill="#FBFCFD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 190.948L22.68 218.293C45.36 245.637 91.98 300.326 137.34 300.326C182.7 300.326 229.32 245.637 274.68 259.309C321.3 272.982 366.66 355.016 412.02 368.688C458.64 382.36 504 327.671 549.36 279.818C595.98 231.965 641.34 190.948 686.7 170.439C733.32 149.931 778.68 149.931 825.3 211.456C870.66 272.982 916.02 396.033 962.64 423.377C1008 450.722 1053.36 382.36 1099.98 368.688C1145.34 355.016 1190.7 396.033 1237.32 396.033C1282.68 396.033 1329.3 355.016 1374.66 327.671C1420.02 300.326 1466.64 286.654 1489.32 279.818L1512 272.982V108.914H1489.32C1466.64 108.914 1420.02 108.914 1374.66 108.914C1329.3 108.914 1282.68 108.914 1237.32 108.914C1190.7 108.914 1145.34 108.914 1099.98 108.914C1053.36 108.914 1008 108.914 962.64 108.914C916.02 108.914 870.66 108.914 825.3 108.914C778.68 108.914 733.32 108.914 686.7 108.914C641.34 108.914 595.98 108.914 549.36 108.914C504 108.914 458.64 108.914 412.02 108.914C366.66 108.914 321.3 108.914 274.68 108.914C229.32 108.914 182.7 108.914 137.34 108.914C91.98 108.914 45.36 108.914 22.68 108.914H0V190.948Z"
            fill="#F6F9FA"
          />
        </svg>

        <svg
          className="absolute top-0 left-0 right-0 z-10 opacity-50"
          viewBox="0 0 1512 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="150" r="150" fill="#0099FF" opacity="0.5" />
          <circle cx="1100" cy="400" r="120" fill="#4189FF" opacity="0.4" />
          <circle cx="900" cy="50" r="80" fill="#FBFCFD" opacity="0.3" />
          <line
            x1="0"
            y1="350"
            x2="1512"
            y2="350"
            stroke="#1E6286"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <rect
            x="300"
            y="100"
            width="200"
            height="100"
            fill="#FF7A00"
            opacity="0.4"
            transform="rotate(45 300 100)"
          />
          <polygon
            points="150 500, 200 550, 100 550"
            fill="#4189FF"
            opacity="0.6"
          />
          <polygon
            points="1200 100, 1250 150, 1150 150"
            fill="#34C3F6"
            opacity="0.4"
          />
          <line
            x1="50"
            y1="100"
            x2="200"
            y2="50"
            stroke="#FBFCFD"
            strokeWidth="2"
          />
          <line
            x1="300"
            y1="500"
            x2="500"
            y2="300"
            stroke="#FF7A00"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex flex-row ">
          <h1 className="lg:text-7xl text-5xl italic">
            Your Support
            <span className="mt-auto lg:text-2xl text-xs italic">
              Their hope
            </span>
          </h1>
        </div>

        <div className="flex flex-row space-x-3 lg:mt-0 mt-10 lg:absolute lg:top-1/4">
          <button className="inline-block px-6 py-3 font-bold bg-black text-center  text-white  align-middle transition-all rounded-full leading-pro text-xs">
            Help now
          </button>
          <button className="inline-block px-6 py-3 font-bold bg-gray text-center  text-black  align-middle transition-all rounded-full leading-pro text-xs">
            Donate now
          </button>
        </div>

        <div className="flex flex-row justify-center lg:space-x-10 p-3 md:p-0 ">
          <div className="lg:flex lg:visible flex-col space-y-4 w-fit hidden ">
            <div className="clip1 pattern1 w-52 h-72 flex flex-col justify-between p-4 items-center bg-[#1E6286]">
              <div className="flex flex-col gap-3 h-3/4 justify-center pt-1.5">
                <h1 className="text-2xl text-white">Thousands</h1>
                <p className="text-sm text-white">
                  of homes, particularly in rural area, were destroyed, leaving
                  many families displaced
                </p>
              </div>

              <div className="rounded-full h-1/5 p-2 flex flex-row items-center justify-between  bg-sky-900 w-full">
                <p className="text-white text-base w-4/5 text-center">
                  Help them
                </p>
                <button className="rounded-full w-10 h-10 bg-secondary">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="w-52 h-20 flex items-center  rounded-2xl bg-black">
              <p className="text-base text-center w-full text-white ">
                <i className="fa-regular pr-3 fa-face-smile text-white"></i>
                We need your help
              </p>
            </div>
          </div>

          <div className=" flex flex-row  mt-auto space-x-5 md:space-x-10 h-full ">
            <div
              className="clip2 bg-cover bg-center bg-no-repeat md:w-40  w-1/3 p-4 flex flex-col justify-between pt-10 md:h-60 h-52 text-white"
              style={{
                backgroundImage: `url(${earthquake})`,
              }}
            >
              <h1 className="md:text-base text-sm">Earthquake</h1>
              <p className="md:text-base text-xs">
                Destruction of 56 homes and damage to 110 roads
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-2xl justify-center mt-auto h-3/4 flex flex-col space-y-3 p-5">
              <p className="text-center md:text-base text-xs ">
                +50.000 Joined Donor
              </p>
              <div className="rounded-full h-1/6 p-2 md:pr-6 pr-4 flex flex-row items-center justify-between  bg-gray w-full">
                <button className="rounded-full md:w-8 w-6 md:h-8 h-6 bg-black">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </button>
                <p className=" md:w-4/5 text-center md:text-base text-xs">
                  Join us
                </p>
              </div>
            </div>

            <div
              className="clip3 bg-cover bg-center bg-no-repeat md:w-40 w-1/3 p-4 flex flex-col justify-between pt-10 md:h-60 h-52 text-white"
              style={{
                backgroundImage: `url(${flood})`,
              }}
            >
              <h1 className="md:text-base text-sm">floods</h1>
              <p className="md:text-base text-xs">
                2,946 deaths and 5,674 injured, as of official reports
              </p>
            </div>
          </div>

          <div className="lg:flex lg:visible flex-col space-y-4 hidden  w-fit items-center ">
            <div className="clip4 pattern2 w-52 h-72 flex flex-col justify-between p-4 items-center bg-[#4189FF]">
              <div className="flex flex-col gap-3 h-3/4 justify-center pt-1.5">
                <h1 className="text-2xl text-white">Essential</h1>
                <p className="text-sm text-white">
                  Essential infrastructure such as drinking water and
                  electricity systems was heavily disrupted
                </p>
              </div>

              <div className="rounded-full h-1/5 p-2  flex flex-row items-center justify-between  bg-secondary w-full">
                <button className="rounded-full w-10 h-10 bg-sky-800">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <p className="text-white text-base w-4/5 text-center">
                  Explore more
                </p>
              </div>
            </div>
            <div className="w-52 h-20 flex items-center  rounded-2xl bg-[#273B4A]">
              <p className="text-base text-center w-full text-white ">
                <i className="fa-regular fa-thumbs-up pr-3 text-white"></i>
                We Are Here For You
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* supporters */}
      <div className="h-32 flex justify-center items-center gap-10 bg-lightBg ">
        <img
          className="w-40 grayscale"
          src={require("../../../Assets/Images/Logo/Sponsors/Populaire-Banque.png")}
          alt=""
        />
        <img
          className="w-40 grayscale"
          src={require("../../../Assets/Images/Logo/Sponsors/Bank-of-Africa.png")}
          alt=""
        />
        <img
          className="w-24 grayscale"
          src={require("../../../Assets/Images/Logo/Sponsors/Doctors-without-borders.png")}
          alt=""
        />
        <img
          className="w-40 grayscale"
          src={require("../../../Assets/Images/Logo/Sponsors/lesieur-cristal.png")}
          alt=""
        />
        <img
          className="w-32 grayscale"
          src={require("../../../Assets/Images/Logo/Sponsors/ciments-du-Maroc.png")}
          alt=""
        />
      </div>
    </header>
  );
};

export default HeroSection;
