import React from "react";

function Booknow() {
  return (
    <section
      className=" font-montserrat text-white py-16 pb-12 sm:py-32 sm:pb-24 px-7"
      style={{
        background: `url("/img/bg-3.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="booknow"
    >
      <div className="  sm:max-w-5xl mx-auto ">
        <h1 className="text-2xl max-md:font-medium md:text-5xl ">
          Tailor @ Your Doorstep
        </h1>

        <p
          className="text-[13px] sm:text-lg text-left  py-7  sm:py-5 pb-12 sm:pb-24"
          style={{ lineHeight: "130%" }}
        >
          Enjoy free pickup and delivery across Dubai and Sharjah with AL
          MAHEREIN. We collect and return your garments at no extra cost,
          ensuring convenience and quality service.
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(74deg, #F6D093 0%, #B18A4B 88%)",
        }}
        className=" rounded-md max-w-5xl mx-auto px-4 sm:px-11 flex shadow-lg max-md:flex-wrap"
      >
        <div className="mr-2">
          <h3 className="text-lg sm:text-[22px] pt-4 sm:pt-9">
            Let's Make It happen together!
          </h3>
          <p className="text-[13px] max-sm:w-11/12 py-1 md:pb-14 ">
            We offer a wide range of specialized quality services
          </p>
        </div>{" "}
        <div className="my-auto md:mx-auto flex gap-7 max-md:py-4 max-md:pb-7">
          <a
             href="https://wa.me/message/Y757UKRWSQ35D1?src=qr"
            className="max-sm:text-[13px] font-medium sm:text-nowrap my-auto max-sm:text-center p-6 py-[10px] bg-[#F6D093] rounded-lg border-[#FFBF78] border hover:brightness-105 transition-all"
          >
            Book Now
          </a>
          <a
            href="/#"
            className=" max-sm:text-[13px] font-medium p-6 py-[10px] sm:text-nowrap max-sm:text-center my-auto  bg-[#fff] rounded-lg text-[#E0B777] border-[#FFBF78] border hover:brightness-105 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Booknow;
