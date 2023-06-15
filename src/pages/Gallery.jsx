import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import trip from "../data/trip.json";
import execData from "../data/exec.json";
import projectData from "../data/project.json";
import niteData from "../data/quiznite.json";
import fundraiserData from "../data/fundraiser.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  const { loader } = useAppContext();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      {loader && <Loader />}

      <section className="w-full min-h-[200px] md:min-h-[300px] bg-white text-slate-700 pt-16 md:pt-[90px] bg-sec bg-no-repeat bg-cover md:bg-[center_top_-3rem] lg:bg-[center_top_-14rem]">
        <div className="w-full min-h-[200px]  md:min-h-[300px] lg:px-[15%] px-5 bg-black/50 flex justify-center items-center first-section-text text-[1.75rem] md:text-[2.5rem] text-white uppercase">
          <h1>STCOGA Gallery</h1>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5 "
      >
        <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          Executives
        </h1>
        <p className="text-[.85rem]">Swipe left to see more...</p>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4 snap-mandatory snap-x ">
            {execData?.map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] relative snap-start snap-always"
              >
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  <span className="font-bold text-[1.25rem]">
                    {" "}
                    {item?.name}
                  </span>
                  <br />
                  {item?.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full flex md:flex-row flex-col gap-5 lg:px-[15%] px-5"
      >
        <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700">
          <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
            STCOGA UK & EUROPE - INCOMING EXCO
          </h1>
          <iframe
            className="w-full min-h-[400px]"
            src="https://www.youtube.com/embed/vdjjz5g4noM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>

        <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700">
          <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
            STCOGA UK & EUROPE PAST EXCOS 2018 - 2023
          </h1>
          <iframe
            className="w-full min-h-[400px]"
            src="https://www.youtube.com/embed/YykQDVprdro"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5 "
      >
        <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          Senior Secondary School Solar Power and Electricity Installation
          Project
        </h1>
        <h3 className="w-full font-bold text-[1.25rem] mb-6 text-end text-[#4b2a05]">
          February - March 2023
        </h3>
        <p className="text-[.85rem]">Swipe left to see more...</p>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4 snap-mandatory snap-x ">
            {projectData?.map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] relative snap-start snap-always"
              >
                {item?.image ? (
                  <img
                    alt=""
                    src={item?.image}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={item?.video}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                <p
                  className={`absolute ${
                    item?.video ? "top-0" : "bottom-0"
                  } left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center`}
                >
                  {item?.title}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5 "
      >
        <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          Trip to Ardfoyle Convent, Cork Ireland
        </h1>
        <p className="text-[.85rem]">Swipe left to see more...</p>

        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4 snap-mandatory snap-x ">
            {trip?.map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] relative snap-start snap-always"
              >
                {item?.image ? (
                  <img
                    alt=""
                    src={item?.image}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={item?.video}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                {/* <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  fullname
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5 "
      >
        <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          NSF Quiz nite
        </h1>
        <p className="text-[.85rem]">Swipe left to see more...</p>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4 snap-mandatory snap-x ">
            {niteData?.map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] relative snap-start snap-always"
              >
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>{" "}
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5 "
      >
        <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          St Teresa’s College Ibadan 90th Anniversary and Fundraising{" "}
        </h1>
        <p className="text-[.85rem]">Swipe left to see more...</p>
        <div className="w-full h-[470px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4 snap-mandatory snap-x ">
            {fundraiserData?.map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] relative snap-start snap-always"
              >
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>{" "}
      </section>

      <Footer />
      <ScrollToTop />
      {/* <Footer id="footer" /> */}
    </>
  );
};

export default Gallery;
