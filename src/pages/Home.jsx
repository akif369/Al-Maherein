import React from "react";

function Home() {
  return (
    <section id="main" className="bg-cover bg-center h-screen" style={{ background:`url("/img/bg-1.png")`}}>
      <nav className="flex items-center  p-6 list-none gap-12 justify-center sm:mr-16">
        <h1 className=" font-bold text-white font-della text-2xl ">AL MAHEREIN DUBAI’S FINEST TAILORS</h1>
          <li>
            <a className="text-white hover:text-gray-300  transition-all duration-150" href="/#">ABOUT</a>
          </li>
          <li>
            <img src="/logo/almeh.svg" alt="al-meh" width={100} height={100} />
          </li>
          <li>
            <a className="text-white hover:text-gray-300 transition-all duration-150" href="/#">SERVICES</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300 transition-all duration-150" href="/#">PORTFOLIO</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300 transition-all duration-150" href="/#">BOOK NOW</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300 transition-all duration-150" href="/#">CONTACT</a>
          </li>
      </nav>

      <div className="text-center p-6">
        <h2 className="text-2xl text-white">Sewing with Heart,</h2>
        <h1 className="text-5xl font-bold text-white mt-4">We are AL-MAHEREIN, Bringing Your Style to Life.</h1>
        <a href="/#" className="inline-block mt-6 px-8 py-3 bg-white text-black font-bold rounded-lg shadow-lg hover:bg-gray-200">
          LET'S TALK NOW
        </a>
      </div>
    </section>
  );
}

export default Home;
