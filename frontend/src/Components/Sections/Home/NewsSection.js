import news from "../../../Assets/Images/home/news.webp";
import newsPaper from "../../../Assets/Images/home/newsPaper.webp";

const NewsSection = () => {
  return (
    <div className="flex flex-wrap justify-center md:gap-10 lg:gap-20 gap-28 items-center w-screen">
      <div className="relative md:w-[40%] w-[90%] flex ">
        <div
          className="w-[80%] lg:h-80 md:h-60 h-52 rounded-2xl "
          style={{
            backgroundImage: `url(${newsPaper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[75%] lg:h-72 md:h-56 h-48 rounded-2xl absolute top-[40%] left-[25%] border-8 border-white"
          style={{
            backgroundImage: `url(${news})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="md:w-[35%] w-[90%] gap-5 items-start flex flex-col">
        <h1 className="text-2xl font-bold ">
          <span className="text-secondary">Stay Informed with</span> Real-Time
          Updates
        </h1>
        <p className="text-xs lg:text-base">
          Stay updated on our Actuality page! Track our relief efforts and see
          the impact of each contribution in real time
        </p>
        <button className="w-fit text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white  align-middle transition-all rounded-lg cursor-pointer  leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
          Latest news
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
