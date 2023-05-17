// import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  const { loader } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {loader && <Loader />}
      <main className="w-full min-h-screen bg-blue-50 pt-16 md:pt-[90px]">
        <section className="w-full h-[300px] sm:h-[650px] lg:h-[90vh] bg-home bg-no-repeat bg-cover bg-center">
          <div className="overlay w-full h-[300px] sm:h-[650px] lg:h-[90vh] flex justify-center items-center relative">
            <div className="w-full md:w-fit h-fit bg-[#4b2a05]/30 md:rounded-3xl p-3 md:p-8 flex flex-col justify-center items-center">
              <h1 className="text-white text-[1.2rem] md:text-[2.75em] text-center uppercase first-section-text">
                ST Teresa’s College Old Girls Association <br /> (STCOGA) UK &
                EUROPE
              </h1>
              <button
                onClick={() => navigate("/gallery")}
                className="uppercase px-4 py-2 md:px-10 md:py-3 border-white md:border-[#a16207] border-2 text-white hover:bg-[#4b2a05]/60 hover:border-white mt-5 transition-all duration-300 first-section-text md:font-bold"
              >
                View Gallery
              </button>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full absolute bottom-[-1px] left-0 z-0 rotate-180"
            >
              <path
                fill="#eff6ff"
                fillOpacity="1"
                d="M0,192L80,165.3C160,139,320,85,480,64C640,43,800,53,960,80C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
          <div className="w-fit mx-auto">
            <h1 className="text-[1.2rem] sm:text-[2rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
              Get In Touch
            </h1>

            <p className="text-[1rem] md:text-[1.25rem] text-center">
              Step into a world of nostalgia and lifelong connections at ST
              Teresa’s College Old Girls Association (STCOGA) UK & EUROPE
              website. <br /> Join us as we honor our past, celebrate our
              present, and forge a path for future generations of graduates.
            </p>

            <div className="w-full flex-col md:flex-row flex gap-4 justify-center mt-8">
              <a href="tel:00447300313668">
                {" "}
                <div className="bg-white/60 shadow-md py-6 px-10 rounded-md flex flex-col gap-1 justify-center items-center font-medium">
                  <img src="/images/phone.png" alt="" className="w-14 h-14" />
                  <p className="">Call Us</p>
                  {/* <p className="font-medium text-[1.25rem]">+1 456 777 6341</p> */}
                </div>
              </a>

              <a href="https://wa.me/00447300313668">
                <div className="bg-white/60 shadow-md py-6 px-10 rounded-md flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/whatsapp.svg"
                    alt=""
                    className="w-14 h-14"
                  />
                  <p className="">Whatsapp</p>
                  {/* <p className="font-medium text-[1.25rem]">+1 456 777 6341</p> */}
                </div>
              </a>
              <div className="bg-white/60 shadow-md py-6 px-10 rounded-md flex flex-col gap-1 justify-center items-center font-medium">
                <img
                  src="/images/icons8-facebook-48.png"
                  alt=""
                  className="w-14 h-14"
                />
                <p className="">Facebook</p>
                {/* <p className="font-medium text-[1.25rem]">+1 456 777 6341</p> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[400px] bg-white text-slate-700 lg:px-[15%] px-5 bg-sec bg-no-repeat bg-cover bg-center md:bg-[center_top_-25rem]">
          <div className="w-full min-h-[400px] bg-black/10 py-10 flex flex-col items-center justify-center">
            <h1 className="text-[1.2rem] sm:text-[2rem] font-medium uppercase text-center mb-5 text-white first-section-text">
              STCOGA UK & EUROPE
            </h1>

            <button
              onClick={() => navigate("/gallery")}
              className="uppercase px-10 py-3 border-white border-2 text-white hover:bg-[#4b2a05]/60 hover:border-white mt-5 transition-all duration-300 first-section-text font-bold"
            >
              View Gallery
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      {/* <Footer id="footer" /> */}
    </>
  );
};

export default Homepage;
