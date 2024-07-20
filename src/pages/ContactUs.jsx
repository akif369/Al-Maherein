import React from "react";

function ContactUs() {
  return (
    <section id="contact">
      <div className="my-7 mt-24 font-montserrat text-center grid justify-center w-full ">
        <h1 className="text-4xl">Book Your Appointment</h1>
        <p className="font-light my-2 text-gray-700 text-[12px] w-2/3 mx-auto">
          Call us now or enter your contact information and a message and we
          will be sure to get back to you. Opening hours: 10 a.m. to 09 p.m.
          (Except Friday & Sunday)
        </p>

        <div className="text-left flex justify-between mx-7 my-11 font-medium flex-wrap gap-y-10 ">
          <div className="flex gap-[10px] ">
            <img  className="mb-auto"src="/icon/email.svg"  width={60} height={60}alt="email" />
            <div>
              <h1 className="text-[22px]">Email</h1>
              <p className="text-sm text-gray-800">info@example.com</p>
            </div>
          </div>

          <div className="flex gap-[10px]">
            <img  className="mb-auto" src="/icon/phone.svg" width={60} height={60} alt="phone" />
            <div>
              <h1 className="text-[22px]">Phone</h1>
              <p className="text-sm text-gray-800">+971 1 234 5678</p>
            </div>
          </div>

          <div className="flex gap-[10px] self-start">
            <img className="mb-auto" src="/icon/Address.svg"  width={60} height={60} alt="Address" />
            <div>
              <h1 className="text-[22px]">Address</h1>
              <p className="text-sm text-gray-800 sm:max-w-36">Al Tawr Street, XV B, Business Bay, Dubai (UAE)</p>
            </div>
          </div>
        </div>
      </div>

      {/* map and contact us */}
      <div className="py-5 p-2 bg-gray-100 font-montserrat">
        *This feature (GMAP -1010#500*) is not available on this free domain
        service. This is only a visual representation and not for production
        use.
      </div>
    </section>
  );
}

export default ContactUs;
