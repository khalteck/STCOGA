// import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import shop from "../data/shop.json";

const Homepage = () => {
  const { loader } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {loader && <Loader />}
      <main className="w-full min-h-screen bg-blue-50 pt-16 md:pt-[90px]">
        <section className="w-full h-[400px] md:h-[650px] lg:h-[90vh] bg-home bg-no-repeat bg-cover bg-center">
          <div className="overlay w-full h-[400px] md:h-[650px] lg:h-[90vh] flex justify-center items-center relative">
            <div className="w-full md:w-fit h-fit bg-[#4b2a05]/30 md:rounded-3xl p-3 md:p-8 flex flex-col justify-center items-center z-10">
              <h1 className="text-white text-[1.2rem] md:text-[2.75em] text-center uppercase first-section-text">
                ST Teresa’s College Old Girls Association <br /> (STCOGA) UK &
                EUROPE
              </h1>
              <button
                onClick={() => navigate("/gallery")}
                className="uppercase px-4 py-2 md:px-10 md:py-3 border-white border-2 text-white hover:bg-[#4b2a05]/60 hover:border-white mt-5 transition-all duration-300 first-section-text md:font-bold"
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

        <section
          id="contact"
          className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5"
        >
          <div className="w-fit mx-auto">
            <h1 className="text-[1.2rem] md:text-[2rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
              Get In Touch
            </h1>

            <p className="text-[1rem] md:text-[1.25rem] text-center">
              Step into a world of nostalgia and lifelong connections at
              St.Teresa’s College Old Girls Association (STCOGA) UK & EUROPE
              website. <br /> Join us as we honor our past, celebrate our
              present, and forge a path for future generations of graduates.
            </p>

            <div className="w-full grid grid-cols-3 md:flex gap-4 justify-center mt-8">
              <a href="tel:00447300313668">
                {" "}
                <div className="bg-white/60 shadow-md p-2 md:py-4 md:px-6 rounded-md hover:bg-[#4b2a05]/20 flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/phone.png"
                    alt=""
                    className="md:w-14 md:h-14 w-10 h-10 "
                  />
                  {/* <p className="hidden md:block">Call Us</p> */}
                  {/* <p className="hidden md:blockfont-medium text-[1.25rem]">+1 456 777 6341</p> */}
                </div>
              </a>

              <a href="https://wa.me/+447300313668">
                <div className="bg-white/60 shadow-md p-2 md:py-4 md:px-6 rounded-md hover:bg-[#4b2a05]/20 flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/whatsapp.svg"
                    alt=""
                    className="md:w-14 md:h-14 w-10 h-10 "
                  />
                  {/* <p className="hidden md:block">Whatsapp</p> */}
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092990044684">
                <div className="bg-white/60 shadow-md p-2 md:py-4 md:px-6 rounded-md hover:bg-[#4b2a05]/20 flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/icons8-facebook-48.png"
                    alt=""
                    className="md:w-14 md:h-14 w-10 h-10 "
                  />
                  {/* <p className="hidden md:block">Facebook</p> */}
                </div>
              </a>
              <a href="https://twitter.com/stcogaukeurope">
                <div className="bg-white/60 shadow-md p-2 md:py-4 md:px-6 rounded-md hover:bg-[#4b2a05]/20 flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/icons8-twitter-48.png"
                    alt=""
                    className="md:w-14 md:h-14 w-10 h-10 "
                  />
                  {/* <p className="hidden md:block">Twitter</p> */}
                </div>
              </a>

              <a href="https://www.instagram.com/stcoga_ukandeurope/">
                <div className="bg-white/60 shadow-md p-2 md:py-4 md:px-6 rounded-md hover:bg-[#4b2a05]/20 flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/icons8-instagram-48.png"
                    alt=""
                    className="md:w-14 md:h-14 w-10 h-10 "
                  />
                  {/* <p className="hidden md:block">Instagram</p> */}
                </div>
              </a>

              <a href="mailto:info@stcogaukandeurope.co.uk">
                <div className="bg-white/60 shadow-md p-2 md:py-4 md:px-6 rounded-md hover:bg-[#4b2a05]/20 flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/icons8-email-48.png"
                    alt=""
                    className="md:w-14 md:h-14 w-10 h-10 "
                  />
                  {/* <p className="hidden md:block font-normal">Email</p> */}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[550px] bg-white text-slate-700 bg-sec bg-no-repeat bg-cover bg-center md:bg-[center_top_-20rem]">
          <div className="w-full min-h-[550px] bg-black/50 py-10 lg:px-[15%] px-5 flex flex-col items-center justify-center">
            <h1 className="text-[1.2rem] md:text-[2rem] font-medium uppercase text-center mb-5 text-white first-section-text">
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

        <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5 mt-4 relative">
          <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
            STCOGA Alumni Shop
          </h1>
          <img
            src="/images/icons8-shop-48.png"
            alt=""
            className="md:w-[80px] md:h-[80px] w-14 h-14 absolute right-4 top-0"
          />
          <p className="text-[.85rem]">Swipe left to see more...</p>
          <div className="w-full h-[400px] border-2 border-[#4b2a05]/50 flex gap-4 overflow-x-auto p-4 rounded-lg box">
            <div className="flex gap-4 snap-mandatory snap-x ">
              {shop?.map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] md:w-[400px] relative snap-start snap-always"
                >
                  <img
                    alt=""
                    src={item?.image}
                    className="w-full h-[320px] object-cover rounded-lg"
                  />
                  <a href="https://wa.me/+447300313668">
                    <button className="px-8 py-1 mt-3 bg-[#4b2a05] text-white rounded-md hover:opacity-70">
                      Buy
                    </button>
                  </a>
                  <p
                    className={`absolute bottom-10 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center`}
                  >
                    {item?.name}
                  </p>
                  <p
                    className={`absolute top-0 left-0 w-fit rounded-full bg-black bg-opacity-70 text-white p-4 text-[1.2rem] font-bold text-center`}
                  >
                    {item?.price}
                  </p>
                </div>
              ))}
            </div>
          </div>{" "}
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      {/* <Footer id="footer" /> */}
    </>
  );
};

export default Homepage;
