import React, { useState, useEffect, useRef } from "react";
import SlicedButton from "../components/SlicedButton";

function Home() {
  const videoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Adjust the speed as desired (0.5 is half speed)
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      id="main"
      className="bg-cover sm:h-screen relative overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src="/vid/test2.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full opacity-65 bg-[#DBDBDB] pointer-events-none -z-10"></div>

      <nav className="flex items-center p-6 justify-center max-sm:hidden mx-7">
        <h1 className="font-bold text-[#584624] font-della text-2xl max-lg:hidden">
          AL MAHEREIN DUBAI’S FINEST TAILORS
        </h1>
        <div className="max-sm:hidden lg:hidden h-[100px] w-[100px] ">
          <img
            src="/logo/newLogo.svg"
            alt="al-meh"
            // style={{ mixBlendMode: "multiply" }}
            width={100}
            height={100}
          />
        </div>
        <ul className="max-sm:hidden flex gap-6 lg:gap-12 items-center ml-12 list-none">
          <li>
            <a
              className="text-black transition-all duration-150"
              href="/#about"
            >
              ABOUT
            </a>
          </li>
          <li className="w-[120px] h-[90px] max-lg:hidden">
            <img
              src="/logo/newLogo.svg"
              alt="al-meh"
              // style={{ mixBlendMode: "multiply" }}
              width={120}
              height={100}
            />
          </li>
          <li>
            <a
              className="text-black transition-all duration-150"
              href="/#service"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a className="text-black transition-all duration-150" target="_blank" href="https://tapdeal.link/@almahere">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              className="text-black transition-all duration-150 text-nowrap"
              href="/#booknow"
            >
              BOOK NOW
            </a>
          </li>
          <li>
            <a
              className="text-black transition-all duration-150"
              href="/#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile navbar */}
      <nav className="sm:hidden flex justify-between  items-center p-4">
        <div className="flex font-della items-center">
          <img
            src="/logo/newLogo.svg"
            width={100}
            alt="logo"
            // className="mix-blend-multiply"
          />
          {/* <div className="mt-3 text-[#3b2f18]">
            <h1 className="text-[17px]">AL MAHEREIN</h1>
            <p className="text-[10px] relative bottom-2 font-redRose">
              DUBAI’S FINEST TAILORS
            </p>
          </div> */}
        </div>
        <div className="flex">
          <a
            href="/#booknow"
            className="font-medium my-auto p-1 px-2 text-sm text-white bg-[#F6D093] rounded-lg border-[#FFBF78] border hover:brightness-105 transition-all"
          >
            Book Now
          </a>
          <div className="ml-4 mt-1">
            <button
              onClick={toggleMenu}
              className="hamburger  focus:outline-none"
              aria-label="Toggle menu"
            >
              <img src="/icon/menu.svg" alt="menu" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 sm:hidden  w-full h-full bg-white z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button className="absolute right-5 top-6" onClick={toggleMenu}>
          <img src="/icon/close.svg" alt="x" />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="flex font-della items-center absolute top-3  mr-7">
            <img
              src="/logo/mobileLogosvg.svg"
              alt="logo"
              className="mix-blend-multiply"
            />
            <div className="mt-3 text-[#3b2f18]">
              <h1 className="text-[20px]">AL MAHEREIN</h1>
              <p className="text-[12px] relative bottom-2 font-redRose">
                DUBAI’S FINEST TAILORS
              </p>
            </div>
          </div>
          <li onClick={toggleMenu}>
            <a className="text-black text-xl" href="/#about">
              ABOUT
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="text-black text-xl" href="/#service">
              SERVICES
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="text-black text-xl" target="_blank" href="https://tapdeal.link/@almahere">
              PORTFOLIO
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="text-black text-xl" href="/#booknow">
              BOOK NOW
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="text-black text-xl" href="/#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center p-6 h-full my-32">
        <h2 className="text-[32px] sm:text-2xl text-black font-della">
          Sewing with Heart,
        </h2>
        <h1 className="text-[30px] sm:text-5xl font-bold font-redRose text-black mt-4">
          We are <span className="text-nowrap"> AL-MAHEREIN,</span> Bringing
          Your Style to Life.
        </h1>

        <div className="relative h-full w-full grid my-7">
          <SlicedButton />
        </div>
      </div>
    </section>
  );
}

export default Home;
