import image from "../../../Assets/Images/home/hope.webp";
const InvitationSection = () => {
  return (
    <div className="w-full flex flex-wrap-reverse gap-40 md:gap-0 items-center justify-around">
      <div className="flex w-[90%] md:w-[35%] flex-col  justify-between gap-5 items-start md:items-end">
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
        <button className=" text-xs inline-block px-10 py-3 lg:text-lg bg-primaryLight text-center text-white  align-middle transition-all rounded-lg cursor-pointer  leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-secondary hover:shadow-lg active:opacity-85">
          Join our community
        </button>
      </div>
      <div className="md:w-2/5 w-[90%] flex items-end justify-end relative">
        <div
          className="rounded-xl md:w-[80%] w-full md:h-80 h-60"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div>
          <div className="md:w-3/4 w-4/5 bg-white shadow-xl p-5 absolute rounded-xl  -bottom-[50%] md:-bottom-[10%] right-[10%] md:right-[40%]">
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
