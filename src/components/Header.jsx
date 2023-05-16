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
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact"
                  ? "border-[#4b2a05] border-b-2"
                  : "border-white"
              } whitespace-nowrap border-b-2 hover:border-[#4b2a05]`}
            >
              Contact
            </Link>
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
            <img
              className="w-[30px] h-[30px] cursor-pointer mr-[25px] absolute top-[30px] right-[10px] text-white"
              alt=""
              src="/images/icons8-cancel-white-48.png"
              onClick={() => {
                handleClick();
              }}
            />
            <div
              onClick={hideDropdown}
              className="w-[35%] h-full float-left bg-transparent"
            ></div>
            <ul className="slide float-right w-[65%] h-full bg-[#4b2a05] px-[30px] text-[1rem] text-white pt-[100px] uppercase">
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
                <Link to="/" onClick={hideDropdown}>
                  <div className="w-full">contact</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}
    </header>
  );
};

export default Header;
