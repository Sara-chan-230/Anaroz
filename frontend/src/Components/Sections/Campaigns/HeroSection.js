import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HeroSection = () => {
  return (
    <header className="flex flex-col gap-14 w-screen justify-center pt-28 items-center relative">
      <div className="absolute top-0 h-auto left-0 right-0 -z-20">
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
          <circle cx="500" cy="150" r="150" fill="#34C3F6" opacity="0.5" />
          <circle cx="1100" cy="400" r="120" fill="#9CD84E" opacity="0.4" />
          <line
            x1="0"
            y1="350"
            x2="1512"
            y2="350"
            stroke="#1E6286"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <rect
            x="300"
            y="300"
            width="200"
            height="100"
            fill="#FF7A00"
            opacity="0.4"
            transform="rotate(45 300 100)"
          />
          <polygon
            points="150 500, 200 550, 100 550"
            fill="#F64A45"
            opacity="0.6"
          />
          <polygon
            points="1200 100, 1250 150, 1150 150"
            fill="#6136BA"
            opacity="0.4"
          />
          <line
            x1="0"
            y1="300"
            x2="340"
            y2="0"
            stroke="#F64A45"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center md:space-y-10 space-y-6">
        <h1 className="md:text-7xl text-5xl  italic">
          Be the Light
          <span className="md:text-2xl text-sm italic"> in Someone's Life</span>
        </h1>

        <Button
          variant="contained"
          size="large"
          startIcon={<PlayArrowIcon />}
          sx={{
            borderRadius: "999px", 
            fontWeight: "bold",
            textTransform: "none",
            boxShadow : "none" ,
            background : "#063751"
          }}
        >
          Watch Video
        </Button>
      </div>

      <div className="flex lg:space-x-20 md:space-x-5 space-x-3 pb-5">
        <div className="relative">
          <div className="clip6 lg:h-72 lg:w-72 md:w-60 md:h-60 w-32 h-32 bg-[#3C7696] "></div>
          <img
            src={require("../../../Assets/Images/campaigns/old men.png")}
            alt=""
            className="lg:h-64 md:w-48 w-24 absolute right-0 bottom-0 z-10"
          />
        </div>
        <div className="relative mt-auto flex justify-center">
          <div className="lg:h-56 lg:w-64 md:w-52 md:h-44 w-32 h-24 rounded-t-xl md:rounded-t-3xl bg-[#0099FF] "></div>
          <img
            src={require("../../../Assets/Images/campaigns/boy.png")}
            alt=""
            className="lg:w-60 md:w-48 w-28 absolute bottom-0 z-10"
          />
        </div>
        <div className="relative h-fit w-fit">
          <div className="clip7 lg:h-72 lg:w-72 md:w-60 md:h-60 w-32 h-32 bg-[#9A80CF] "></div>
          <img
            src={require("../../../Assets/Images/campaigns/girl.png")}
            alt=""
            className="lg:h-64 md:w-56 w-24 absolute right-0 bottom-0 z-10"
          />
        </div>
      </div>
      <div className="h-32 w-full flex justify-center items-center gap-10 bg-lightBg ">
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
