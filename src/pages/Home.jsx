import React, { useEffect, useRef } from "react";
import SlicedButton from "../components/SlicedButton";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Adjust the speed as desired (0.5 is half speed)
    }
  }, []);

  return (
    <section id="main" className="bg-cover h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src="/vid/test2.mp4" type="video/mp4" />
      </video>


      <div className="absolute top-0 left-0 w-full h-full opacity-65 bg-[#DBDBDB] pointer-events-none -z-10"></div>

      <nav className="flex items-center p-6 justify-center">
        <h1 className="font-bold text-[#584624] font-della text-2xl">
          AL MAHEREIN DUBAI’S FINEST TAILORS
        </h1>
        <ul className="max-sm:hidden flex gap-12 items-center ml-12 list-none">
          <li>
            <a className="text-black transition-all duration-150" href="/#">
              ABOUT
            </a>
          </li>
          <li>
            <img
              src="/logo/almeh.svg"
              alt="al-meh"
              style={{ mixBlendMode: "multiply" }}
              width={100}
              height={100}
            />
          </li>
          <li>
            <a className="text-black transition-all duration-150" href="/#">
              SERVICES
            </a>
          </li>
          <li>
            <a className="text-black transition-all duration-150" href="/#">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a className="text-black transition-all duration-150" href="/#">
              BOOK NOW
            </a>
          </li>
          <li>
            <a className="text-black transition-all duration-150" href="/#">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      <div className="text-center p-6 h-full my-32">
        <h2 className="text-2xl text-black font-della">Sewing with Heart,</h2>
        <h1 className="text-5xl font-bold font-redRose text-black mt-4">
          We are AL-MAHEREIN, Bringing Your Style to Life.
        </h1>

        <div className="relative h-full w-full grid my-7">
          <SlicedButton />
        </div>
      </div>
    </section>
  );
}

export default Home;
