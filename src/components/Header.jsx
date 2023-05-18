import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  const [openContact, setopenContact] = useState(false);
  function handleContact() {
    setopenContact((prevState) => !prevState);
  }

  return (
    <header>
      {/* desktop header */}
      <div
        className={`sm:w-full md:w-full top-0 bg-white lg:px-[15%] px-12 py-7 fixed left-[50%] translate-x-[-50%] md:flex items-center z-30 hidden transition-all duration-500 shadow-md`}
      >
        <img
          alt=""
          src="/images/logo-stcoga.jpeg"
          className="w-[150px] h-[150px] absolute bottom-[-50px] rounded-b-3xl"
        />
        <Link to="/" className="mr-auto">
          {/* <img alt="" src="/images/logo-stcoga.jpeg" className="w-28 h-20" /> */}
          <div className="flex items-center gap-2">
            <div className="font-bold text-[1.25rem] md:text-[1.75rem] pl-[160px] text-[#4b2a05]">
              STCOGA UK & EUROPE
            </div>
          </div>
        </Link>
        <nav className="flex items-center uppercase">
          <div className="flex items-center gap-3 lg:gap-8 mr-auto text-[#4b2a05] text-[0.9rem]">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/"
                  ? "border-[#4b2a05] border-b-2"
                  : "border-white"
              } border-b-2 hover:border-[#4b2a05]`}
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/about"
                  ? "border-[#4b2a05] border-b-2"
                  : "border-white"
              } whitespace-nowrap border-b-2 hover:border-[#4b2a05]`}
            >
              About
            </Link> */}
            <Link
              to="/gallery"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/gallery"
                  ? "border-[#4b2a05] border-b-2"
                  : "border-white"
              } whitespace-nowrap border-b-2 hover:border-[#4b2a05]`}
            >
              Gallery
            </Link>
            <div
              onClick={handleContact}
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact"
                  ? "border-[#4b2a05] border-b-2"
                  : "border-white"
              } whitespace-nowrap border-b-2 hover:border-[#4b2a05]`}
            >
              Contact
            </div>
          </div>
        </nav>
      </div>

      {/* mobile header */}
      <div
        className={`top-0 bg-white  md:hidden w-full h-[65px] px-6 fixed left-0 z-30 border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md transition-all duration-500`}
      >
        <Link to="/" className="mr-auto">
          {/* <img alt="" src="/images/logo-stcoga.jpeg" className="w-16 h-auto" /> */}
          <div className="flex items-center gap-2">
            <img alt="" src="/images/logo-stcoga.jpeg" className="w-8 h-8" />
            <div className="font-bold text-[1rem] md:text-[1.75rem]">
              STCOGA UK & EUROPE
            </div>
          </div>{" "}
        </Link>
        <img
          alt="hamburger"
          src="/images/icons8-menu-30.png"
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={handleClick}
        />

        {openMenu && (
          <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
            <div className="bg-[#4b2a05] p-2 rounded-full cursor-pointer absolute top-[30px] right-[10px]">
              {" "}
              <img
                className="w-7 h7"
                alt=""
                src="/images/icons8-cancel-white-48.png"
                onClick={() => {
                  handleClick();
                }}
              />
            </div>
            <div
              onClick={hideDropdown}
              className="w-[35%] h-full float-left bg-transparent"
            ></div>
            <ul className="slide float-right w-[65%] h-full bg-white px-[30px] text-[1rem] text-[#4b2a05] pt-[100px] uppercase">
              <li className="my-4">
                <Link to="/" onClick={hideDropdown}>
                  <div className="w-full">Home</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/Gallery" onClick={hideDropdown}>
                  <div className="w-full">Gallery</div>
                </Link>
              </li>

              <li className="my-4">
                <Link
                  to="/"
                  onClick={() => {
                    hideDropdown();
                    handleContact();
                  }}
                >
                  <div className="w-full">contact</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}

      {openContact && (
        <div className="w-full h-screen bg-black/40 fixed top-0 left-0 flex justify-center items-center z-10">
          <div className="w-fit bg-white p-4 rounded-lg flex-col flex gap-4 justify-center relative">
            <div className="bg-[#4b2a05] p-2 rounded-full cursor-pointer absolute top-2 right-2">
              {" "}
              <img
                className="w-7 h7"
                alt=""
                src="/images/icons8-cancel-white-48.png"
                onClick={() => {
                  // handleClick();
                  handleContact();
                }}
              />
            </div>
            <h1 className="text-[1.2rem] sm:text-[2rem] font-medium uppercase text-center mb-5 text-[#4b2a05]">
              Contact Us
            </h1>
            <div className="flex gap-4">
              <a href="tel:00447300313668">
                {" "}
                <div className="bg-white/60 shadow-md py-6 px-10 rounded-md flex flex-col gap-1 justify-center items-center font-medium">
                  <img src="/images/phone.png" alt="" className="w-10 h-10" />
                  <p className="">Call Us</p>
                  {/* <p className="font-medium text-[1.25rem]">+1 456 777 6341</p> */}
                </div>
              </a>

              <a href="https://wa.me/00447300313668">
                <div className="bg-white/60 shadow-md py-6 px-10 rounded-md flex flex-col gap-1 justify-center items-center font-medium">
                  <img
                    src="/images/whatsapp.svg"
                    alt=""
                    className="w-10 h-10"
                  />
                  <p className="">Whatsapp</p>
                  {/* <p className="font-medium text-[1.25rem]">+1 456 777 6341</p> */}
                </div>
              </a>
              <div className="bg-white/60 shadow-md py-6 px-10 rounded-md flex flex-col gap-1 justify-center items-center font-medium">
                <img
                  src="/images/icons8-facebook-48.png"
                  alt=""
                  className="w-10 h-10"
                />
                <p className="">Facebook</p>
                {/* <p className="font-medium text-[1.25rem]">+1 456 777 6341</p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
