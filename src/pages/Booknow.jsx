import React from "react";

function Booknow() {
  return (
    <section
      className=" font-montserrat text-white py-32 pb-24"
      style={{
        background: `url("/img/bg-3.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="booknow"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl ">Tailor @ Your Doorstep</h1>

        <p className="text-lg  py-5 pb-24">
          Enjoy free pickup and delivery across Dubai and Sharjah with AL
          MAHEREIN. We collect and return your garments at no extra cost,
          ensuring convenience and quality service.
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(74deg, #F6D093 0%, #B18A4B 88%)",
        }}
        className=" rounded-md max-w-5xl mx-auto px-11 flex shadow-lg"
      >
        <div>
          <h3 className="text-[22px] pt-9">Let's Make It happen together!</h3>
          <p className="py-4 pb-14">
            We offer a wide range of specialized quality services
          </p>
        </div>{" "}
        <div className="my-auto mx-auto flex gap-7">
          <a
            href="/#"
            className="font-medium p-6 py-[10px] bg-[#F6D093] rounded-lg border-[#FFBF78] border hover:brightness-105 transition-all"
          >
            Book Now
          </a>
          <a
            href="/#"
            className="font-medium p-6 py-[10px] bg-[#fff] rounded-lg text-[#E0B777] border-[#FFBF78] border hover:brightness-105 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Booknow;
