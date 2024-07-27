import React from "react";
import Card from "../components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 620 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 620, min: 0 },
    items: 1,
  },
};

function ArrowLeft({ onClick }) {
  return (
    <div
      className="absolute left-0 pt-2 z-10 opacity-85 hover:opacity-100 transition-all cursor-pointer"
      onClick={onClick}
    >
      <img src="/icon/Arrowleft.svg" alt="<" />
    </div>
  );
}

function ArrowRight({ onClick }) {
  return (
    <div
      className="absolute right-0 z-10 opacity-85 hover:opacity-100 transition-all cursor-pointer"
      onClick={onClick}
    >
      <img src="/icon/Arrowright.svg" alt=">" />
    </div>
  );
}

function Service() {
  return (
    <section
      id="service"
      className="bg-[#FFFBED] py-10 pt-7  text-center relative  "
    >
      <div className="grid sm:gap-2 pt-[6px] pb-14">
        <h2 className="font-della text-lg">Al-Maherein</h2>
        <h1 className="font-redRose text-[32px] sm:text-4xl font-bold">
          SERVICES
        </h1>
        <p className="font-montserrat text-xs">
          Take a look at the variety of services we offer for Individuals
        </p>{" "}
      </div>
      <Carousel
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        additionalTransfrom={0}
        arrows
        customLeftArrow={<ArrowLeft />}
        customRightArrow={<ArrowRight />}
        custom

        autoPlaySpeed={7000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        autoPlay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Card
  url={"/img/card1.png"}
  heading={`Men's Suits and Trousers`}
  detail={`Crafted with precision and tailored to perfection, our men's suits and trousers epitomize sophistication and style, ensuring a flawless fit that exudes confidence.`}
/>
<Card
  url={"/img/card2.png"}
  heading={`Shirts Alteration`}
  detail={`From intricate adjustments to comprehensive alterations, our skilled artisans transform ordinary shirts into personalized masterpieces, tailored to the unique preferences of our clientele.`}
/>
<Card
  url={"/img/card3.png"}
  heading={`Children's Party Wear`}
  detail={`Our children's party wear collection features playful and elegant designs, ensuring your little ones look adorable and feel comfortable for any special occasion.`}
/>
<Card
  url={"/img/card4.png"}
  heading={`Formal Clothing Alteration`}
  detail={`Our formal clothing alteration service ensures that every piece fits perfectly, offering meticulous adjustments for a flawless and professional appearance.`}
/>
<Card
  url={"/img/card5.png"}
  heading={`Suits`}
  detail={`Our suits collection combines classic and contemporary styles to provide versatile options for every occasion, crafted from the finest materials to ensure an impeccable fit and finish.`}
/>
<Card
  url={"/img/card6.png"}
  heading={`Wedding Dresses`}
  detail={`Discover our exquisite collection of wedding dresses, featuring timeless elegance and modern designs. Each dress is meticulously crafted to make your special day unforgettable.`}
/>
<Card
  url={"/img/card7.png"}
  heading={`Wedding Suits`}
  detail={`Our wedding suits are designed to complement the bride's attire perfectly. With a focus on detail and quality, we ensure that the groom looks his best on the big day.`}
/>
<Card
  url={"/img/card8.png"}
  heading={`Ladies Wear`}
  detail={`Our ladies wear collection offers a range of stylish and elegant outfits for various occasions. From casual chic to sophisticated evening wear, we cater to every fashion need.`}
/>
      </Carousel>
    </section>
  );
}

export default Service;
