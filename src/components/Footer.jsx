import React from "react";

function Footer() {
  return (
    <div className="bg-[#2B2525] font-robo">
      <div className="flex text-[13px] list-none gap-20 pt-8 pb-16 text-white">
        <h1 className="font-della text-4xl m-20 my-auto">AL MAHEREIN</h1>

        <div className="font-light">
          <h1 className="text-[16px] font-bold">About</h1>
          <li>
            <a href="/#" >About</a>
          </li>
          <li>
            <a href="/#">Services</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">contact</a>
          </li>
        </div>

        <div className="font-light">
          <h1 className="text-[16px] font-bold">Useful Links</h1>
          <li>
            <a href="/#">Privacy Policy</a>
          </li>
          <li>
            <a href="/#">Terms & Conditions</a>
          </li>
          <li>
            <a href="/#">Disclaimer</a>
          </li>
          <li>
            <a href="/#">Book Appointment</a>
          </li>
        </div>

        <div className="w-48">
          <h1 className="font-bold">Subscribe Now</h1>
          <p className=" font-montserrat font-light text-[10px] my-2">Don’t miss our future updates! Get Subscribed Today!</p>

          <div className="flex items-center bg-[#FFFBED] rounded-full  shadow-lg overflow-hidden font-montserrat h-8">
            <input
              type="email"
              placeholder="Your mail here"
              className="bg-[#FEFFD2] text-gray-500 py-2 pl-4 pr-1 w-full  focus:outline-none flex-grow"
            />
            <button className="bg-[#D68933] p-3 flex items-center  justify-center">
              <img src="/icon/search.svg" alt="search" width={15} height={15} />
            </button>
          </div>
        </div>

        <div></div>
      </div>

      <p className=" w-full bg-black text-[10px] text-center py-[5px] text-white font-[300]">
        ©2024 AL-MAHEREIN. ALL RIGHTS RESERVED{" "}
      </p>
    </div>
  );
}

export default Footer;