import React from "react";
import ClientCard from "../components/ClientCard";

function Client() {
  return (
    <section id="client" className="font-montserrat text-center py-7 bg-[#FFFBED] px-2">
      <h1 className="text-[28px] sm:text-4xl font-semibold my-3">What Our Clients Say</h1>
      <p className="text-xs sm:text-lg text-gray-700">
        Hundreds of customers rely on our services. Hear their stories.
      </p>

      <div className="flex my-14 justify-around flex-wrap gap-y-10">
        <ClientCard
          customerName={"John"}
          type={"Valued Customer"}
          review={`User reviews like the one above praise The Smart Tailor's unparalleled craftsmanship and perfection. They really put effort into my pieces and made sure I was 100% satisfied with the alterations. Highly recommend! `}
        />
        <ClientCard
          isBlack
          customerName={"Sarah"}
          type={"Regular Customer"}
          review={`Every visit to The Smart Tailor is a pleasure. The staff are friendly, and they always deliver on time. Their craftsmanship is unparalleled. Five stars!`}
        />
        <ClientCard
          customerName={"Sophia"}
          type={"Loyal Customer"}
          review={`I've been coming to The Smart Tailor for all my suits. They never disappoint. The fit is always perfect and the quality is top-notch. Highly recommend them for any tailoring needs.`}
        />
      </div>
    </section>
  );
}

export default Client;
