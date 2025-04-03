import Khadija from "../../../Assets/Images/about/Testimonial/Khadija-Amani.webp";
import Omar from "../../../Assets/Images/about/Testimonial/Omar-elfassi.webp";
import Yassmin from "../../../Assets/Images/about/Testimonial/Yassmin-haddad.webp";
import Mehdi from "../../../Assets/Images/about/Testimonial/Mehdi-lahlou.webp";
import Nadia from "../../../Assets/Images/about/Testimonial/Nadia-Benali.webp";
import karim from "../../../Assets/Images/about/Testimonial/Karim-Dounia.webp";
import Salma from "../../../Assets/Images/about/Testimonial/Salma-Tazi.webp";
import Youssef from "../../../Assets/Images/about/Testimonial/Youssef-Amrani.webp";
import Rate from "./Rate";

const Testimonial = () => {
  const data = [
    {
      image: Khadija,
      place: "left-[5%] top-0",
      description: "Anaroz provided a lifeline for my family after the earthquake. The support we received was incredible!",
      author: "Khadija Amani",
    },
    {
      image: Omar,
      place: "left-[5%] top-[40%]",
      description: "Thanks to Anaroz, I found a volunteering opportunity that truly makes a difference.",
      author: "Omar El Fassi",
    },
    {
      image: Yassmin,
      place: "right-[5%] top-[40%]",
      description: "Seeing the community come together on Anaroz gave me hope. A truly inspiring platform!",
      author: "Yasmine Haddad",
    },
    {
      image: Mehdi,
      place: "left-[20%] top-[20%]",
      description: "Anaroz made it easy for me to contribute to local disaster relief efforts. Great initiative!",
      author: "Mehdi Lahlou",
    },
    {
      image: Nadia,
      place: "left-[40%] top-[0%]",
      description: "A powerful platform connecting those in need with real help. Thank you, Anaroz!",
      author: "Nadia Benali",
    },
    {
      image: karim,
      place: "left-[60%] top-0",
      description: "Through Anaroz, I was able to donate supplies directly to families in need.",
      author: "Karim Dounia",
    },
    {
      image: Salma,
      place: "right-[20%] top-[25%]",
      description: "This platform is a game-changer for emergency response and community support.",
      author: "Salma Tazi",
    },
    {
      image: Youssef,
      place: "right-[5%] top-[0%]",
      description: "Anaroz bridges the gap between volunteers and those who need help the most.",
      author: "Youssef Amrani",
    },
  ];
  
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
      {data.map((item, key) => (
        <Rate
          place={item.place}
          description={item.description}
          image={item.image}
          author={item.author}
          key = {key}
        />
      ))}
              {/* Organic Blobs */}
              <div className="absolute top-[15%] left-[12%] w-16 h-16 bg-cyan opacity-20 rounded-[40%_60%_70%_30%/50%_40%_60%_50%] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[18%] w-20 h-20 bg-purple-100 opacity-25 rounded-[30%_70%_60%_40%/40%_50%_50%_60%] animate-blob-slow"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-[25%] right-[5%] w-10 h-10 bg-orange-100 opacity-30 transform rotate-45 skew-x-12"></div>
        <div className="absolute bottom-[15%] left-[5%] w-12 h-12 bg-pink-100 opacity-20 rounded-full"></div>
        <div className="absolute top-[40%] left-[30%] w-8 h-14 bg-indigo-100 opacity-25 rounded-full transform rotate-30"></div>

        {/* Tiny Accents */}
        <div className="absolute top-[10%] right-[30%] w-3 h-3 bg-green-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-[30%] left-[25%] w-4 h-4 bg-yellow-100 rounded-full opacity-30"></div>

        {/* Abstract Lines */}
        <div className="absolute top-[60%] left-[10%] w-24 h-1 bg-blue-100 opacity-20 transform rotate-15"></div>
        <div className="absolute bottom-[10%] right-[10%] w-16 h-0.5 bg-red-100 opacity-25 transform -rotate-6"></div>

        {/* Floating Circles */}
        <div className="absolute top-[70%] right-[25%] w-7 h-7 bg-teal-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-[20%] left-[40%] w-5 h-5 bg-amber-100 rounded-full opacity-25 animate-float-slow"></div>

        {/* Gradient Elements */}
        <div className="absolute bottom-[40%] right-[40%] w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-20 rounded-full"></div>
        <div className="absolute top-[50%] left-[50%] w-18 h-18 bg-gradient-to-tr from-pink-50 to-purple-50 opacity-15 rounded-[50%]"></div>

        {/* Complex Shapes */}
        <div className="absolute top-[30%] right-[35%] w-9 h-9 bg-emerald-100 opacity-25 clip-path-polygon"></div>
        <div className="absolute bottom-[25%] left-[35%] w-11 h-11 bg-rose-100 opacity-20 rounded-[30%_70%_50%_50%/60%_50%_50%_40%]"></div>

        {/* Animated Elements */}
        <div className="absolute top-[65%] left-[20%] w-6 h-6 bg-violet-100 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-[35%] right-[20%] w-8 h-8 bg-sky-100 opacity-25 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default Testimonial;
