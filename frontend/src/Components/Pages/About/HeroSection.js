import flood from "../../../Assets/Images/about/floods.png";
import earthquake from "../../../Assets/Images/about/earthquake.png";
const HeroSection = () => {
  return (
    <header>
      <div>
        <div className="flex flex-row justify-center lg:space-x-10 p-3 md:p-0 ">
          <div className="lg:flex lg:visible flex-col space-y-4 w-fit hidden ">
            <div
              className="w-52 h-72 flex flex-col justify-between p-4 items-center bg-[#1E6286]"
              style={{
                clipPath:
                  "polygon( 0% 6.757%,0% 6.757%,0.131% 5.661%,0.51% 4.621%,1.116% 3.652%,1.929% 2.766%,2.929% 1.979%,4.094% 1.304%,5.404% 0.754%,6.839% 0.344%,8.378% 0.088%,10% 0%,44.477% 0%,44.477% 0%,45.426% 0.03%,46.358% 0.121%,47.267% 0.268%,48.149% 0.472%,48.997% 0.73%,49.806% 1.039%,50.57% 1.399%,51.284% 1.807%,51.943% 2.262%,52.541% 2.761%,57.49% 7.321%,57.49% 7.321%,58.087% 7.82%,58.746% 8.275%,59.46% 8.683%,60.225% 9.043%,61.034% 9.353%,61.882% 9.61%,62.763% 9.814%,63.673% 9.962%,64.605% 10.052%,65.554% 10.082%,90% 10.082%,90% 10.082%,91.622% 10.171%,93.161% 10.427%,94.596% 10.836%,95.906% 11.386%,97.071% 12.061%,98.071% 12.849%,98.884% 13.734%,99.49% 14.703%,99.869% 15.743%,100% 16.839%,100% 93.243%,100% 93.243%,99.869% 94.339%,99.49% 95.379%,98.884% 96.348%,98.071% 97.234%,97.071% 98.021%,95.906% 98.696%,94.596% 99.246%,93.161% 99.656%,91.622% 99.912%,90% 100%,10% 100%,10% 100%,8.378% 99.912%,6.839% 99.656%,5.404% 99.246%,4.094% 98.696%,2.929% 98.021%,1.929% 97.234%,1.116% 96.348%,0.51% 95.379%,0.131% 94.339%,0% 93.243%,0% 6.757% )",
                backgroundColor: "#1E6286",
                opacity: 1,
                backgroundImage:
                  "linear-gradient(135deg, #08527A 25%, transparent 25%), " +
                  "linear-gradient(225deg, #08527A 25%, transparent 25%), " +
                  "linear-gradient(45deg, #08527A 25%, transparent 25%), " +
                  "linear-gradient(315deg, #08527A 25%, #1E6286 25%)",
                backgroundPosition: "39px 0, 39px 0, 0 0, 0 0",
                backgroundSize: "78px 78px",
                backgroundRepeat: "repeat",
              }}
            >
              <div className="flex flex-col gap-3 h-3/4 justify-center pt-1.5">
                <h1 className="text-2xl text-white">Thousands</h1>
                <p className="text-sm text-white">
                  of homes, particularly in rural area, were destroyed, leaving
                  many families displaced
                </p>
              </div>

              <div className="rounded-full h-1/5 p-2 flex flex-row items-center justify-between  bg-sky-900 w-full">
                <p className="text-white text-base w-4/5 text-center">
                  Help them
                </p>
                <button className="rounded-full w-10 h-10 bg-secondary">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="w-52 h-20 flex items-center  rounded-2xl bg-black">
              <p className="text-base text-center w-full text-white ">
                <i className="fa-regular pr-3 fa-face-smile text-white"></i>
                We need your help
              </p>
            </div>
          </div>

          <div className=" flex flex-row  mt-auto space-x-5 md:space-x-10 h-full ">
            <div
              className="md:w-40  w-1/3 p-4 flex flex-col justify-between pt-10 md:h-60 h-52 text-white"
              style={{
                clipPath:
                  "polygon( 0% 7.194%,0% 7.194%,0.157% 6.027%,0.612% 4.92%,1.339% 3.888%,2.315% 2.945%,3.515% 2.107%,4.913% 1.388%,6.485% 0.803%,8.207% 0.367%,10.054% 0.094%,12% 0%,43.036% 0%,43.036% 0%,44.244% 0.036%,45.428% 0.144%,46.58% 0.321%,47.692% 0.564%,48.757% 0.87%,49.766% 1.238%,50.712% 1.665%,51.587% 2.147%,52.384% 2.683%,53.094% 3.271%,56.937% 6.812%,56.937% 6.812%,57.647% 7.399%,58.443% 7.935%,59.318% 8.418%,60.264% 8.844%,61.274% 9.212%,62.338% 9.519%,63.45% 9.761%,64.602% 9.938%,65.786% 10.046%,66.995% 10.082%,88% 10.082%,88% 10.082%,89.947% 10.176%,91.793% 10.449%,93.515% 10.885%,95.087% 11.47%,96.485% 12.189%,97.685% 13.028%,98.661% 13.97%,99.388% 15.003%,99.843% 16.11%,100% 17.277%,100% 92.806%,100% 92.806%,99.843% 93.973%,99.388% 95.08%,98.661% 96.112%,97.685% 97.055%,96.485% 97.893%,95.087% 98.612%,93.515% 99.197%,91.793% 99.633%,89.947% 99.906%,88% 100%,12% 100%,12% 100%,10.054% 99.906%,8.207% 99.633%,6.485% 99.197%,4.913% 98.612%,3.515% 97.893%,2.315% 97.055%,1.339% 96.112%,0.612% 95.08%,0.157% 93.973%,0% 92.806%,0% 7.194% )",
                backgroundImage: `url(${earthquake})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="md:text-base text-sm">Earthquake</h1>
              <p className="md:text-base text-xs">
                Destruction of 56 homes and damage to 110 roads
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-2xl justify-center mt-auto h-3/4 flex flex-col space-y-3 p-5">
              <p className="text-center md:text-base text-xs ">
                +50.000 Joined Donor
              </p>
              <div className="rounded-full h-1/6 p-2 md:pr-6 pr-4 flex flex-row items-center justify-between  bg-gray w-full">
                <button className="rounded-full md:w-8 w-6 md:h-8 h-6 bg-black">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </button>
                <p className=" md:w-4/5 text-center md:text-base text-xs">
                  Join us
                </p>
              </div>
            </div>

            <div
              className="md:w-40 w-1/3 p-4 flex flex-col justify-between pt-10 md:h-60 h-52 text-white"
              style={{
                clipPath:
                  "polygon( 0% 18.465%,0% 18.465%,0.157% 17.298%,0.612% 16.191%,1.339% 15.159%,2.315% 14.216%,3.515% 13.378%,4.913% 12.659%,6.485% 12.074%,8.207% 11.638%,10.054% 11.365%,12% 11.271%,30.876% 11.271%,30.876% 11.271%,32.521% 11.204%,34.105% 11.007%,35.611% 10.688%,37.022% 10.256%,38.322% 9.719%,39.493% 9.084%,40.519% 8.36%,41.383% 7.554%,42.067% 6.676%,42.554% 5.732%,42.631% 5.539%,42.631% 5.539%,43.119% 4.595%,43.803% 3.716%,44.666% 2.911%,45.692% 2.187%,46.863% 1.552%,48.163% 1.015%,49.575% 0.583%,51.081% 0.264%,52.664% 0.067%,54.309% 0%,88% 0%,88% 0%,89.947% 0.094%,91.793% 0.367%,93.515% 0.803%,95.087% 1.388%,96.485% 2.107%,97.685% 2.945%,98.661% 3.888%,99.388% 4.92%,99.843% 6.027%,100% 7.194%,100% 92.806%,100% 92.806%,99.843% 93.973%,99.388% 95.08%,98.661% 96.112%,97.685% 97.055%,96.485% 97.893%,95.087% 98.612%,93.515% 99.197%,91.793% 99.633%,89.947% 99.906%,88% 100%,12% 100%,12% 100%,10.054% 99.906%,8.207% 99.633%,6.485% 99.197%,4.913% 98.612%,3.515% 97.893%,2.315% 97.055%,1.339% 96.112%,0.612% 95.08%,0.157% 93.973%,0% 92.806%,0% 18.465% )",
                backgroundImage: `url(${flood})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="md:text-base text-sm">floods</h1>
              <p className="md:text-base text-xs">
                2,946 deaths and 5,674 injured, as of official reports
              </p>
            </div>
          </div>

          <div className="lg:flex lg:visible flex-col space-y-4 hidden  w-fit items-center ">
            <div
              className="w-52 h-72 flex flex-col justify-between p-4 items-center bg-[#4189FF]"
              style={{
                clipPath:
                  "polygon( 0% 14.781%,0% 14.781%,0.131% 13.685%,0.51% 12.646%,1.116% 11.676%,1.929% 10.791%,2.929% 10.004%,4.094% 9.328%,5.404% 8.779%,6.839% 8.369%,8.378% 8.113%,10% 8.025%,32.001% 8.025%,32.001% 8.025%,33.007% 7.99%,33.993% 7.889%,34.952% 7.724%,35.878% 7.496%,36.765% 7.209%,37.605% 6.864%,38.394% 6.464%,39.123% 6.011%,39.786% 5.509%,40.378% 4.958%,42.202% 3.067%,42.202% 3.067%,42.794% 2.516%,43.458% 2.013%,44.187% 1.561%,44.975% 1.161%,45.816% 0.816%,46.702% 0.529%,47.628% 0.301%,48.588% 0.135%,49.574% 0.034%,50.58% 0%,90% 0%,90% 0%,91.622% 0.088%,93.161% 0.344%,94.596% 0.754%,95.906% 1.304%,97.071% 1.979%,98.071% 2.766%,98.884% 3.652%,99.49% 4.621%,99.869% 5.661%,100% 6.757%,100% 10.082%,100% 93.243%,100% 93.243%,99.869% 94.339%,99.49% 95.379%,98.884% 96.348%,98.071% 97.234%,97.071% 98.021%,95.906% 98.696%,94.596% 99.246%,93.161% 99.656%,91.622% 99.912%,90% 100%,10% 100%,10% 100%,8.378% 99.912%,6.839% 99.656%,5.404% 99.246%,4.094% 98.696%,2.929% 98.021%,1.929% 97.234%,1.116% 96.348%,0.51% 95.379%,0.131% 94.339%,0% 93.243%,0% 14.781% )",
                backgroundColor: "#4189FF",
                opacity: 1,
                backgroundImage:
                  "linear-gradient(135deg, #266dde 25%, transparent 25%), " +
                  "linear-gradient(225deg, #266dde 25%, transparent 25%), " +
                  "linear-gradient(45deg, #266dde 25%, transparent 25%), " +
                  "linear-gradient(315deg, #266dde 25%, #4189FF 25%)",
                backgroundPosition: "39px 0, 39px 0, 0 0, 0 0",
                backgroundSize: "78px 78px",
                backgroundRepeat: "repeat",
              }}
            >
              <div className="flex flex-col gap-3 h-3/4 justify-center pt-1.5">
                <h1 className="text-2xl text-white">Essential</h1>
                <p className="text-sm text-white">
                  Essential infrastructure such as drinking water and
                  electricity systems was heavily disrupted
                </p>
              </div>

              <div className="rounded-full h-1/5 p-2  flex flex-row items-center justify-between  bg-secondary w-full">
                <button className="rounded-full w-10 h-10 bg-sky-900">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <p className="text-white text-base w-4/5 text-center">
                  Explore more
                </p>
              </div>
            </div>
            <div className="w-52 h-20 flex items-center  rounded-2xl bg-[#273B4A]">
              <p className="text-base text-center w-full text-white ">
                <i className="fa-regular fa-thumbs-up pr-3 text-white"></i>
                We Are Here For You
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
