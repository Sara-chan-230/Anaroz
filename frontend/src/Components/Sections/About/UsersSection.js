import UserCard from "./UserCard";
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
      icon: "fa-solid fa-location-crosshairs",
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
      icon: "fa-solid fa-users",
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
      icon: "fa-solid fa-bolt",
      motionProps: { y: 120, duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  ];

  return (
    <div className="flex flex-col justify-center max-w-[90%] mx-auto">
      <div className="flex flex-col gap-10 items-start">
        <h1 className="lg:text-6xl text-5xl italic self-start font-semibold">
          Unified Efforts <span className="lg:text-2xl text-xl">for change</span>
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
    </div>
  );
};

export default UsersSection;
