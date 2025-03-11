
const Card = (props) => {
  return (
    <div
      className="flex justify-center items-center lg:h-[450px] h-[350px] md:w-[30%] w-[90%] bg-cover bg-center rounded-xl group cursor-pointer transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="w-[90%] group-hover:h-[90%] h-[35%] bg-white flex flex-col justify-between mt-auto mb-[5%] items-center rounded-xl relative transition-all duration-500 ease-in-out">
        <div className="group-hover:bg-primaryLight bg-white w-[100%] h-full group-hover:h-1/2 flex flex-col gap-5 justify-center items-center rounded-xl absolute top-0 transition-all duration-500 ease-in-out">
          <div className="lg:w-28 w-20 h-20 group-hover:w-fit group-hover:h-fit lg:h-28 flex items-center justify-center border-2 border-primaryLight bg-white group-hover:border-transparent group-hover:bg-transparent rounded-full transition-all duration-500 ease-in-out absolute lg:-top-[56px] -top-[40px] group-hover:relative group-hover:top-0">
            <i
              className={`${props.icon} lg:text-4xl text-2xl text-primaryLight group-hover:text-white transition-all duration-500 ease-in-out`}
            ></i>
          </div>
          <h1 className="lg:text-lg font-semibold group-hover:text-white transition-all duration-500 ease-in-out">
            {props.title}
          </h1>
        </div>
        <div className="w-[80%] h-1/2 group-hover:flex flex-col justify-center items-center mt-auto gap-5 hidden transition-all duration-500 ease-in-out ">
          <p className="text-center lg:text-sm text-xs">{props.description}</p>
          <button className="bg-primaryLight w-[80%] py-2 rounded-md lg:text-lg text-sm text-white transition-all duration-500 ease-in-out">
            Explore more
            <i className="fa-solid fa-chevron-right lg:text-base text-sm ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
