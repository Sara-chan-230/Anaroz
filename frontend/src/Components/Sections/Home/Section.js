import collaboration from "../../../Assets/Images/home/join.webp";
import volunteer from "../../../Assets/Images/home/Volunteers.webp";
import Solidarity from "../../../Assets/Images/home/solid.webp";

const Section = () => {
  return (
    <div className="relative flex flex-wrap-reverse lg:gap-0 gap-10 justify-around items-center">
      <div className="flex flex-col gap-5 lg:w-[40%] w-[85%] relative">
        <h1 className="lg:text-5xl text-4xl font-semibold leading-snug">
          Anaroz : A Bridge of Hope and Support
        </h1>
        <p>
          Anaroz connects individuals, volunteers, and organizations to provide
          aid where it's needed most. From donations to hands-on help, we make
          it simple to support communities in times of crisis. Together, we can
          make an impact!
        </p>
        <div className="absolute top-[-15%] left-[-15%] w-[100%] h-[100%] bg-gradient-to-br from-yellow-100 to-pink-100 opacity-20 rounded-xl"></div>
      </div>

      <div className="h-[500px] w-[550px] grid grid-cols-2 grid-rows-2 gap-2 relative">
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${collaboration})` }}
            className="h-[85%] w-[85%] bg-cover bg-center rounded-tl-full absolute bottom-0 right-0"
          ></div>
          <div className="absolute top-[-30%] left-[-30%] w-[150px] h-[150px] bg-gradient-to-r from-teal-300 via-blue-500 to-indigo-400 opacity-30 rounded-full"></div>
        </div>
        <div className="relative">
          <div className="h-[60%] w-[60%] bg-secondary rounded-tr-full absolute bottom-0 left-0"></div>
          <div className="h-[40%] w-[40%] bg-indigo-400 rounded-tr-full absolute bottom-0 left-0"></div>
          <div className="h-20 w-20 rounded-full flex justify-center items-center z-10 bg-white absolute -left-[44px] -bottom-[44px]">
            <div className="h-[60%] w-[60%] rounded-full bg-green-500 flex items-center justify-center">
              <i className="fa-solid fa-play text-xl text-white"></i>
            </div>
          </div>
          <div className="absolute top-[-10%] right-[-10%] w-[60px] h-[60px] rounded-full bg-gradient-to-t from-teal-400 to-blue-500 opacity-60"></div>
          <div className="absolute top-[20%] right-[5%] w-[80px] h-[80px] bg-blue-400 opacity-40 transform rotate-45"></div>
        </div>
        <div
          style={{ backgroundImage: `url(${volunteer})` }}
          className="rounded-bl-full bg-cover bg-center"
        ></div>
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${Solidarity})` }}
            className="h-[85%] w-[85%] bg-cover bg-center rounded-br-full absolute top-0 left-0"
          ></div>
          <div className="absolute top-[5%] left-[30%] w-[100px] h-[100px] bg-gradient-to-b from-yellow-300 to-orange-500 opacity-30 rounded-full"></div>
          <div className="absolute top-[50%] left-[10%] w-[40px] h-[40px] bg-purple-400 opacity-50 rounded-sm"></div>
          <div className="absolute top-[70%] left-[50%] w-[40px] h-[40px] bg-pink-300 opacity-50 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;
