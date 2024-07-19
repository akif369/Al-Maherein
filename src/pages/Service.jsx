import React from "react";
import Card from "../components/Card";

function Service() {
  return (
    <section id="service" className="bg-[#FFFBED] h-screen text-center relative  ">
      <div className="grid gap-2 pt-[6px] pb-14">
      <h2 className="font-della text-lg">Al-Maherein</h2>
      <h1 className="font-redRose text-4xl font-bold">SERVICES</h1>
      <p className="font-montserrat text-[16px]">
        Take a look at the variety of services we offer for Individuals
      </p>{" "}
      </div>
      <div className="my-7 flex  justify-around">
        <Card
          url={"/img/card1.png"}
          heading={`Men's Suits and Trousers`}
          detail={` Crafted with precision and tailored to perfection, our men's suits and
          trousers epitomize sophistication and style, ensuring a flawless fit
          that exudes confidence`}
        />
        <Card
          url={"/img/card1.png"}
          heading={`Men's Suits and Trousers`}
          detail={` Crafted with precision and tailored to perfection, our men's suits and
          trousers epitomize sophistication and style, ensuring a flawless fit
          that exudes confidence`}
        />
        <Card
          url={"/img/card1.png"}
          heading={`Men's Suits and Trousers`}
          detail={` Crafted with precision and tailored to perfection, our men's suits and
          trousers epitomize sophistication and style, ensuring a flawless fit
          that exudes confidence`}
        />
      </div>
    </section>
  );
}

export default Service;
