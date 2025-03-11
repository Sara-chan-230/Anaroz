import person1 from "../../../Assets/Images/about/girl.jpg";
import { motion } from "framer-motion";
const Testimonial = () => {
    return (
      <div className="relative h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-[30%] gap-5">
          <p className="rounded-full px-6 py-2 border w-fit">Testimonial</p>
          <h1 className="text-3xl text-center font-semibold">
            Stories of Impact, Hope, and Action
          </h1>
          <p className="text-center">
            Discover inspiring stories, urgent updates, and community-driven
            initiatives. Stay informed about the latest relief efforts.
          </p>
        </div>
        <div className="absolute left-[5%] top-0">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
        <div className="absolute left-[5%] top-[40%]">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
        {/* <div className="absolute left-[20%] top-[60%]">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div> */}
        <div className="absolute left-[20%] top-[20%]">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
        <div className="absolute left-[40%] top-[0%]">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
        <div className="absolute left-[60%] top-0">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
        <div className="absolute right-[20%] top-[25%]">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
        <div className="absolute right-[5%] top-[0%]">
          <div className="flex justify-center items-center relative w-fit">
            <div
              style={{ backgroundImage: `url(${person1})` }}
              className="h-[80px] w-[80px] z-30 rounded-full bg-center bg-cover relative"
            ></div>
            <div className="w-[150px] h-[150px] hidden absolute bg-indigo-100 rounded-full"></div>
            <div className="w-[130px] h-[130px] hidden absolute bg-indigo-200 rounded-full"></div>
            <div className="w-[100px] h-[100px] hidden absolute bg-indigo-300 rounded-full"></div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;
