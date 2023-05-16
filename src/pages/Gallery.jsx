// import { RingLoader } from "react-spinners";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Gallery = () => {
  const { loader } = useAppContext();

  return (
    <>
      <Header />

      {loader && <Loader />}
      <section className="w-full min-h-[300px] bg-white text-slate-700 pt-16 sm:pt-[90px] bg-gallery bg-no-repeat bg-cover bg-[center_top_-13rem]">
        <div className="w-full min-h-[300px] lg:px-[15%] px-5 bg-black/50 flex justify-center items-center first-section-text text-[2.5rem] text-white uppercase">
          <h1>Gallery Page</h1>
        </div>
      </section>
      <section className="w-full min-h-[400px] py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
        <div className="w-fit mx-auto">
          <h1 className="text-[1.2rem] sm:text-[1.75rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
            Dinner nite fest
          </h1>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      {/* <Footer id="footer" /> */}
    </>
  );
};

export default Gallery;
