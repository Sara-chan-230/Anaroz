import UserCard from "./UserCard";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';

const UsersSection = () => {
  const cardsData = [
    {
      bgColor: "bg-secondary",
      title: "Affected Individuals",
      txt: "Individuals impacted by emergencies or hardships can rely on Anaroz to:",
      description: [
        "Access nearby aid centers and resources via the Emergency Map",
        "Share needs with supporters for timely help",
        "Stay updated on relief efforts",
      ],
      icon: <MyLocationRoundedIcon  sx={{width: "30px" , height : "30px"}}/>,
      motionProps: { y: 0, duration: 0.5, ease: "easeOut" },
    },
    {
      bgColor: "bg-purple",
      title: "Supporters",
      txt: "Supporters combine efforts to make a meaningful difference by:",
      description: [
        "Volunteer time or donate securely to causes",
        "Track contributions with the Donation Progress Bar",
        "Get updates on emergencies and opportunities",
      ],
      icon: <VolunteerActivismIcon  sx={{width: "30px" , height : "30px"}}/>,
      motionProps: { y: 60, duration: 0.5, ease: "easeOut" },
    },
    {
      bgColor: "bg-primaryLight",
      title: "Organizations",
      txt: "Organizations use Anaroz to amplify their reach and efficiency by:",
      description: [
        "Publish project updates and manage resources",
        "Coordinate with supporters effectively",
        "Use insights to prioritize and deliver aid",
      ],
      icon: <FlashOnRoundedIcon  sx={{width: "30px" , height : "30px"}}/>,
      motionProps: { y: 120, duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  ];

  return (
    <div className="flex relative flex-col justify-center max-w-[90%] mx-auto">
      <div className="flex flex-col gap-10 items-start">
        <h1 className="lg:text-6xl text-5xl italic self-start font-semibold">
          Unified Efforts{" "}
          <span className="lg:text-2xl text-xl">for change</span>
        </h1>
        <div className="flex justify-between lg:gap-10 gap-5 mt-4 sm:flex-nowrap flex-wrap">
          {cardsData.map((card, i) => (
            <UserCard
              key={i}
              bgColor={card.bgColor}
              title={card.title}
              txt={card.txt}
              description={card.description}
              icon={card.icon}
              motionProps={card.motionProps}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
  {/* Large Organic Blobs */}
  <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-cyan-200/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"></div>
  <div className="absolute bottom-[15%] right-[15%] w-28 h-28 bg-purple-300/25 rounded-[40%_60%_70%_30%/50%_60%_40%_50%]"></div>

  {/* Bold Geometric Shapes */}
  <div className="absolute top-[20%] right-[5%] w-24 h-24 bg-orange-300/40 transform rotate-45"></div>
  <div className="absolute bottom-[10%] left-[5%] w-20 h-20 bg-pink-300/35 rounded-full"></div>

  {/* Large Abstract Forms */}
  <div className="absolute top-[40%] left-[30%] w-36 h-20 bg-indigo-300/30 rounded-full transform rotate-30"></div>
  <div className="absolute bottom-[30%] right-[30%] w-28 h-28 bg-teal-300/35 rounded-lg"></div>

  {/* Oversized Accent Dots */}
  <div className="absolute top-[15%] right-[25%] w-10 h-10 bg-green-300/45 rounded-full"></div>
  <div className="absolute bottom-[25%] left-[25%] w-12 h-12 bg-yellow-300/40 rounded-full"></div>

  {/* Thick Lines */}
  <div className="absolute top-[60%] left-[10%] w-48 h-3 bg-blue-300/30 transform rotate-15"></div>
  <div className="absolute bottom-[10%] right-[10%] w-40 h-2 bg-red-300/35 transform -rotate-6"></div>

  {/* Massive Gradient Elements */}
  <div className="absolute bottom-[40%] right-[40%] w-40 h-40 bg-gradient-to-br from-blue-200/30 to-cyan-200/25 rounded-full"></div>
  <div className="absolute top-[50%] left-[50%] w-44 h-44 bg-gradient-to-tr from-pink-200/35 to-purple-200/30 rounded-[50%]"></div>

  {/* Large Complex Shapes */}
  <div className="absolute top-[30%] right-[35%] w-24 h-24 bg-emerald-300/30 clip-path-polygon"></div>
  <div className="absolute bottom-[25%] left-[35%] w-32 h-32 bg-rose-300/25 rounded-[30%_70%_50%_50%/60%_50%_50%_40%]"></div>
</div>
    </div>
  );
};

export default UsersSection;
