import image from "../../../Assets/Images/register/sunrise.webp";

const InvitationSection = () => {
  return (
    <div className="w-full flex flex-wrap-reverse gap-40 md:gap-0 items-center justify-around relative">
      <div className="absolute top-[-20%] left-[-15%] w-[180px] h-[180px] bg-primaryLight opacity-40 rounded-full z-0"></div>
      <div className="absolute bottom-[-10%] right-[-15%] w-[150px] h-[150px] bg-secondary opacity-30 rounded-full z-0"></div>
      <div className="absolute top-[30%] left-[25%] w-[200px] h-[200px] bg-indigo-400 opacity-25 rounded-full z-0"></div>
      <div className="absolute top-[50%] right-[5%] w-[120px] h-[120px] bg-teal-500 opacity-20 rounded-full z-0"></div>

      <div className="absolute top-[10%] left-[5%] w-[150px] h-[40px] bg-pink-500 opacity-50 transform rotate-45 z-0"></div>
      <div className="absolute bottom-[30%] right-[30%] w-[120px] h-[60px] bg-purple-500 opacity-50 transform rotate-45 z-0"></div>
      <div className="absolute top-[40%] right-[15%] w-[80px] h-[80px] bg-yellow-400 opacity-40 transform rotate-45 z-0"></div>

      <div className="flex w-[90%] md:w-[35%] flex-col justify-between gap-5 items-start md:items-end relative z-10">
        <h1 className="text-2xl font-bold md:text-right">
          <span className="text-secondary">Support the Cause</span>: Your
          Contribution Makes a Difference
        </h1>
        <p className="text-xs lg:text-base md:text-right">
          At Anaroz, we believe in the power of community and compassion. Every
          donation, no matter the size, brings us closer to achieving meaningful
          change. Together, we can uplift those in need, provide critical
          support, and create opportunities that transform lives.
        </p>
        <button className=" text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white align-middle transition-all rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
          Join our community
        </button>
      </div>

      <div className="md:w-2/5 w-[90%] flex items-end justify-end relative z-10">
        <div
          className="rounded-xl md:w-[90%] w-full md:h-80 h-60"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-[20%] left-[30%] w-[100px] h-[100px] bg-orange-400 opacity-40 transform rotate-45 z-0"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[180px] h-[30px] bg-red-500 opacity-50 z-0"></div>
        </div>
        <div>
          <div className="md:w-3/4 w-4/5 bg-white shadow-xl p-5 absolute rounded-xl -bottom-[50%] md:-bottom-[10%] right-[10%] md:right-[40%] z-10">
            <p className="font-decorative text-right leading-relaxed lg:text-lg text-xs">
              <q>
                ﴾ الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ
                سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ۖ وَلَا
                خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ ﴿
              </q>
              <br />
              <span className="font-sans text-sm">(سورة البقرة: 274)</span>
            </p>

            <p className="font-decorative lg:text-base text-xs leading-relaxed">
              "Those who spend their wealth [in Allah's way] by night and by
              day, secretly and publicly, will have their reward with their
              Lord. And there will be no fear concerning them, nor will they
              grieve."
              <br />
              <span className="font-sans text-xs">(Surah Al-Baqarah: 274)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationSection;
