// import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import shop from "../data/shop.json";
import { useEffect, useState } from "react";

const Homepage = () => {
  const { loader } = useAppContext();
  const navigate = useNavigate();

  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    const originalText = `A happy Sunday to all! First and foremost, \n I would like to thank the Almighty God, our creator and Giver of life for the gift of life and making this day happen. A day the Lord has made and in which we shall rejoice and be glad. I would like to express my gratitude to everyone online today. It is a privilege and is amazing being sworn in as incoming president of our great school. Up School!! Up brown and white!! I would like to recognize and thank the members of the Electoral Committee, Sisters Helen Adefioye (Chair), Funmi Ibirogba, Ronke Adesina and Adeola Aderibigbe. I want to thank the outgoing President and exco for the confidence they have shown in me and their welcoming embrace. I accept my new role with a sense of both honour and humility. Now that I have gotten appreciation done, In the days ahead, we will focus on the future of STCOGA together. Please note the word “together”. I would like to emphasise and state boldly that I do not belong to any faction. I prefer to be independent, making a single, unified UK and Europe Chapter my priority In life we all have different political beliefs, even with religion and that has not stopped us from being friends or sisters. Some believe in the Labour party, some are Conservatives, the green party, etc. This has nothing to do with STCOGA. We will all work together toward supporting our Alma Mater. I assure you, we will work hard on your behalf, listen to your ideas, and do everything in our capability to build on the foundations laid by Caroline Pedro and all other Past presidents. Let us be grateful and celebrate the path that was travelled to get us here and thank all who were part of the journey. It is, after all, why STCOGA is here today. To my sisters in the new EXCO, I look forward to working together with you as we do our best to deliver what we have promised in our manifestos. With your support we will make the visions of this esteemed group a reality. No one person has all the answers nor can we as an EXCO do it all without your support. Together we must be strong, cooperate to achieve our endeavours and objective of giving back to our great Alma Mater. I am walking in new directions, and will therefore be asking a lot of questions, learning about aspirations, what people are proudest of and what they are anxious about as we move forward together. More than anything, I will be listening. I hope there will be no shortage of opinions or ideas. I am sure they will be voiced with a desire to make STCOGA better.Reading messages on the chat group, I have observed the resilient nature of our members and outgoing exco. I have read criticism sometimes quite negative and how they have endured it and the challenges they faced too. I have observed their deep commitment to reach new heights. Today, though, I will share what I have come to see as my greatest aspirations: 1. A unified UK and Europe chapter 2. Focus on well – being of members – This would include a. Family-oriented events, b. Time for me breaks - short ladies’ holidays/spas 3. Support the move to make STC an excellent, relevant Secondary School 4. Support businesses of members 5. Workshops to enhance/gain new skills 6. Increase membership 7. Increased participation and volume of financially active members On that point – do we have any event planners in the house? I want to encourage more participation and financially active members to enable us meet our commitments to our Alma Mater. We will support St Teresa’s as they face these challenges to ensure that the students leave with skills, knowledge and adaptability to be future leaders and contribute to society at large. Finally, I am confident that, unified together, we will find ways to not only meet the high expectations we have for ourselves, but exceed those you have for us. We all share a common bond and journey. Through our coming together as one, we can and will create that “something special” that is powerful enough to move STCOGA UK and Europe forward to greater heights. Thank you and God Bless!`;

    if (originalText.length > 200) {
      setTruncatedText(originalText.slice(0, 550) + "...");
    } else {
      setTruncatedText(originalText);
    }
  }, []);

  const [showMore, setShowMore] = useState(false);
  function toggleShowMore() {
    setShowMore((prev) => !prev);
  }

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

        <section className="w-full py-10 mb-10 text-slate-700 lg:px-[15%] px-5 mt-4 relative">
          <h1 className="text-[1.2rem] md:text-[1.75rem] font-medium uppercase text-center mb-6 text-[#4b2a05]">
            Speech from the President, Mopelola Toyobo{" "}
          </h1>

          <div className="w-full flex flex-col md:flex-row gap-5 relative top-10">
            <div className="border-2 border-[#4b2a05] w-[90%] sm:w-fit mx-auto">
              {" "}
              <img
                src="/images/pres.jpeg"
                alt=""
                className="w-full sm:w-[400px] md:w-[300px] h-[300px] object-fit object-cover border border-[#4b2a05] relative top-[-20px] left-[-20px]"
              />
            </div>
            <div className="w-full md:w-[60%]">
              <div className="text-[1.1rem] tracking-wider">
                {truncatedText?.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="w-full text-center">
                <button
                  onClick={toggleShowMore}
                  className="uppercase px-10 py-3 mx-auto border-[#4b2a05] border-2 text-[#4b2a05] hover:bg-[#4b2a05]/60 hover:border-[#4b2a05]/60 mt-5 transition-all duration-300"
                >
                  Read more
                </button>{" "}
              </div>
            </div>
          </div>

          {showMore && (
            <div className="w-full h-screen px-3 pt-[130px] md:pt-[150px] pb-14 fixed top-0 left-0 bg-black/50 flex justify-center z-10">
              <div className="w-full text-end mb-4 absolute top-[80px] md:top-[120px] right-1 md:right-3">
                <button
                  onClick={toggleShowMore}
                  className="px-4 py-2 rounded-lg text-[.85rem] bg-[#4b2a05] text-white border-white border"
                >
                  Close
                </button>
              </div>
              <div className="w-full md:w-[650px] px-3 py-5 sm:px-5 md:p-6 bg-white rounded-lg relative overflow-y-auto scale">
                <h3 className="font-bold text-[1.25rem] mb-6 text-center">
                  Speech from the President, Mopelola Toyobo
                </h3>
                <p className="text-[1.1rem] tracking-wide">
                  A happy Sunday to all! First and foremost,
                  <br />
                  <br /> I would like to thank the Almighty God, our creator and
                  Giver of life for the gift of life and making this day happen.
                  A day the Lord has made and in which we shall rejoice and be
                  glad. <br />
                  <br /> I would like to express my gratitude to everyone online
                  today.
                  <br /> It is a privilege and is amazing being sworn in as
                  incoming president of our great school. Up School!! Up brown
                  and white!! I would like to recognize and thank the members of
                  the Electoral Committee, Sisters Helen Adefioye (Chair), Funmi
                  Ibirogba, Ronke Adesina and Adeola Aderibigbe. I want to thank
                  the outgoing President and exco for the confidence they have
                  shown in me and their welcoming embrace. <br />
                  <br /> I accept my new role with a sense of both honour and
                  humility.
                  <br /> Now that I have gotten appreciation done, In the days
                  ahead, we will focus on the future of STCOGA together. Please
                  note the word “together”. I would like to emphasise and state
                  boldly that I do not belong to any faction. I prefer to be
                  independent, making a single, unified UK and Europe Chapter my
                  priority In life we all have different political beliefs, even
                  with religion and that has not stopped us from being friends
                  or sisters. Some believe in the Labour party, some are
                  Conservatives, the green party, etc. This has nothing to do
                  with STCOGA. We will all work together toward supporting our
                  Alma Mater. <br />
                  <br /> I assure you, we will work hard on your behalf, listen
                  to your ideas, and do everything in our capability to build on
                  the foundations laid by Caroline Pedro and all other Past
                  presidents. Let us be grateful and celebrate the path that was
                  travelled to get us here and thank all who were part of the
                  journey. It is, after all, why STCOGA is here today. <br />
                  <br /> To my sisters in the new EXCO, I look forward to
                  working together with you as we do our best to deliver what we
                  have promised in our manifestos. <br />
                  <br /> With your support we will make the visions of this
                  esteemed group a reality. No one person has all the answers
                  nor can we as an EXCO do it all without your support. Together
                  we must be strong, cooperate to achieve our endeavours and
                  objective of giving back to our great Alma Mater. <br />
                  <br /> I am walking in new directions, and will therefore be
                  asking a lot of questions, learning about aspirations, what
                  people are proudest of and what they are anxious about as we
                  move forward together. More than anything, I will be
                  listening. I hope there will be no shortage of opinions or
                  ideas. I am sure they will be voiced with a desire to make
                  STCOGA better. <br />
                  <br /> Reading messages on the chat group, I have observed the
                  resilient nature of our members and outgoing exco. I have read
                  criticism sometimes quite negative and how they have endured
                  it and the challenges they faced too. I have observed their
                  deep commitment to reach new heights. <br />
                  <br /> Today, though, I will share what I have come to see as
                  my greatest aspirations: <br />
                  1. A unified UK and Europe chapter
                  <br /> 2. Focus on well – being of members – This would
                  include
                  <br /> a. Family-oriented events,
                  <br /> b. Time for me breaks - short ladies’ holidays/spas
                  <br /> 3. Support the move to make STC an excellent, relevant
                  Secondary School
                  <br />
                  4. Support businesses of members
                  <br /> 5. Workshops to enhance/gain new skills
                  <br /> 6. Increase membership <br />
                  7. Increased participation and volume of financially active
                  members <br />
                  <br />
                  On that point – do we have any event planners in the house?
                  <br /> I want to encourage more participation and financially
                  active members to enable us meet our commitments to our Alma
                  Mater. We will support St Teresa’s as they face these
                  challenges to ensure that the students leave with skills,
                  knowledge and adaptability to be future leaders and contribute
                  to society at large. <br />
                  <br /> Finally, I am confident that, unified together, we will
                  find ways to not only meet the high expectations we have for
                  ourselves, but exceed those you have for us. <br />
                  <br /> We all share a common bond and journey. Through our
                  coming together as one, we can and will create that “something
                  special” that is powerful enough to move STCOGA UK and Europe
                  forward to greater heights. <br />
                  <br /> Thank you and God Bless!`;
                </p>
              </div>
            </div>
          )}
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
