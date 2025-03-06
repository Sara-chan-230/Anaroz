import solidarity from "../../../Assets/Images/about/solidarity.webp";
import news from "../../../Assets/Images/about/news.webp";
import collaboration from "../../../Assets/Images/about/collaboration.webp";
import Card from "./Card";
const WhyChooseUs = () => {
  const data = [
    {
      img: solidarity,
      title: "Connect Communities",
      description:
        "Bringing people together to support those who in need ",
      icon: "fa-solid fa-network-wired",
    },
    {
      img: news,
      title: "Real-Time Updates",
      description:
        "Share critical information to ensure swift and effective responses",
      icon: "fa-solid fa-newspaper",
    },
    {
      img: collaboration,
      title: "Foster Collaboration",
      description:
        "Encouraging teamwork between individuals and organizations to make lasting impact",
      icon: "fa-solid fa-handshake-angle",
    },
  ];
    return (
      <div className="w-[90%] flex flex-col justify-center mx-auto gap-10">
        <h1 className=" italic lg:text-6xl text-5xl font-semibold">
          Why We're the <span className="lg:text-2xl text-xl">Best Choice</span>
        </h1>
        <div className="flex justify-center lg:gap-14 gap-5 flex-wrap">
          {data.map((element, i) => {
            return (
              <Card
                image={element.img}
                title={element.title}
                description={element.description}
                icon={element.icon}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );

};

export default WhyChooseUs;
