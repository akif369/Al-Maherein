import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomMap from "../components/Map";

const images = [
  {
    original: '/gallery1.jpg',
    thumbnail: '/gallery1.jpg',
  },
  {
    original: '/gallery3.jpg',
    thumbnail: '/gallery3.jpg',
  },
  {
    original: '/gallery2.jpg',
    thumbnail: '/gallery2.jpg',
  },
  {
    original: '/gallery4.jpg',
    thumbnail: '/gallery4.jpg',
  }
];

function ContactUs() {
  return (
    <section id="contact">
      <div className="sm:mt-24 font-montserrat text-center grid justify-center w-full">
        <h1 className="text-[28px] sm:text-4xl font-semibold my-3">Our Gallery</h1>
        <p className="text-xs sm:text-lg text-gray-700">
          A glimpse of our recent moments and events.
        </p>
        <div className="w-full my-7">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={5000}
            showBullets={true}
          />
        </div>
      </div>

      <div className="my-7 sm:mt-24 font-montserrat text-center grid justify-center w-full">
        <h1 className="text-4xl">Book Your Appointment</h1>
        <p className="font-light my-2 text-gray-700 text-[12px] w-2/3 mx-auto">
          Call us now or enter your contact information and a message and we will be sure to get back to you. 
          Opening hours: 10 a.m. to 09 p.m. (Except Friday & Sunday)
        </p>

        <div className="text-left flex justify-between mx-7 my-11 font-medium flex-wrap gap-y-10">
          <div className="flex gap-[10px] items-start min-h-[100px]">
            <img className="mb-auto" src="/icon/email.svg" width={60} height={60} alt="email" />
            <div>
              <h1 className="text-[22px]">Email</h1>
              <p className="text-sm text-gray-800">almahereinmtllc@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-[10px] items-start min-h-[100px]">
            <img className="mb-auto" src="/icon/phone.svg" width={60} height={60} alt="phone" />
            <div>
              <h1 className="text-[22px]">Phone</h1>
              <p className="text-sm text-gray-800">+971 4 892 8296</p>
            </div>
          </div>

          <div className="flex gap-[10px] items-start min-h-[100px]">
            <img className="mb-auto" src="/icon/address.svg" width={60} height={60} alt="Address" />
            <div>
              <h1 className="text-[22px]">Address</h1>
              <p className="text-sm text-gray-800 sm:max-w-40">
                Al Mamzar Center, M Floor, Shope No - 24 - A, Near Al Qiyadah Metro Station, Dubai (UAE)
              </p>
            </div>
          </div>
        </div>
      </div>

      <CustomMap />
    </section>
  );
}

export default ContactUs;
