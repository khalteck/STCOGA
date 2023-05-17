// import { RingLoader } from "react-spinners";
// import { RingLoader } from "react-spinners";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import irelandData from "../data/ireland.json";
import execData from "../data/exec.json";

const Gallery = () => {
  const { loader } = useAppContext();

  return (
    <>
      <Header />

      {loader && <Loader />}
      {/* <section className="w-full h-screen bg-white flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h2 className="uppercase font-medium text-[1.5rem]">
            Under Construction
          </h2>
          <RingLoader color="#4b2a05" className="mx-auto" />
        </div>
      </section> */}
      <section className="w-full min-h-[200px] md:min-h-[300px] bg-white text-slate-700 pt-16 sm:pt-[90px] bg-sec bg-no-repeat bg-cover md:bg-[center_top_-10rem] lg:bg-[center_top_-14rem]">
        <div className="w-full min-h-[200px]  md:min-h-[300px] lg:px-[15%] px-5 bg-black/50 flex justify-center items-center first-section-text text-[1.75rem] md:text-[2.5rem] text-white uppercase">
          <h1>STCOGA Gallery</h1>
        </div>
      </section>
      <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
        <h1 className="text-[1.2rem] sm:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          Executives
        </h1>
        <p className="text-[.85rem]">Scroll to the left to see more...</p>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4">
            {execData?.map((item, index) => (
              <div key={index} className="w-[300px] md:w-[400px] relative">
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

      <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
        <h1 className="text-[1.2rem] sm:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          Trip to Ardfoyle Convent, Cork Ireland
        </h1>
        <p className="text-[.85rem]">Scroll to the left to see more...</p>

        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4">
            {irelandData?.map((item, index) => (
              <div key={index} className="w-[300px] md:w-[400px] relative">
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  fullname
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
        <h1 className="text-[1.2rem] sm:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          slide 2
        </h1>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4">
            {/* {irelandData?.map((item, index) => (
              <div key={index} className="w-[300px] md:w-[400px] relative">
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  fullname
                </p>
              </div>
            ))} */}
          </div>
        </div>{" "}
      </section>

      <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
        <h1 className="text-[1.2rem] sm:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          slide 3
        </h1>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4">
            {/* {irelandData?.map((item, index) => (
              <div key={index} className="w-[300px] md:w-[400px] relative">
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  fullname
                </p>
              </div>
            ))} */}
          </div>
        </div>{" "}
      </section>

      <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
        <h1 className="text-[1.2rem] sm:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
          slide 4
        </h1>
        <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
          <div className="flex gap-4">
            {/* {irelandData?.map((item, index) => (
              <div key={index} className="w-[300px] md:w-[400px] relative">
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  fullname
                </p>
              </div>
            ))} */}
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
