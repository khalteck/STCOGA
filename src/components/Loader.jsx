import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-white flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <RingLoader color="#4b2a05" />
        {/* <h1 className="sm:text-[1.4rem]">Loading...</h1> */}
      </div>
    </div>
  );
};

export default Loader;
