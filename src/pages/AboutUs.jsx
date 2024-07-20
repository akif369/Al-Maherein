import React from "react";

function AboutUs() {
  return (
    <section id="about" className="font-montserrat flex my-16 justify-end w-4/5">
      <div className="mx-20 mt-24">
        <img src="/img/side1.png" className="rounded-[10px]" alt="bg" />
      </div>
      <div>
        <div className="w-1/2 text-center mx-7">
          <h1 className="font-della text-[32px]">A Little</h1>

          <h1 className="font-redRose text-[40px] font-bold">ABOUT US</h1>
        </div>

        <p className="max-w-[615px] my-9 mt-12">
          Al Maherein Men Tailoring is a distinguished tailoring establishment
          based in the vibrant landscape of the United Arab Emirates. With a
          commitment to exquisite craftsmanship, impeccable service, and an eye
          for detail, we have garnered a reputation for excellence in bespoke
          tailoring. Under the stewardship of Mr. Rajesh Ramachandran, a
          seasoned tailor with over a decade of experience in the UAE, we bring
          forth a fusion of tradition and contemporary fashion sensibilities.{" "}
        </p>

        <div className="grid gap-8">
          <div className="flex gap-[20px] ">
            <img
              className="mb-auto"
              src="/icon/prefectfit.svg"
              width={65}
              height={65}
              alt="fit"
            />
            <div>
              <h1 className="text-[22px] font-semibold">PERFECT FIT</h1>
              <p className=" text-gray-800 max-w-md  leading-tight">
                Every cut is designed with precision to enhance the silhouette
                and achieve effortless style.
              </p>
            </div>
          </div>

          <div className="flex gap-[20px] ">
            <img
              className="mb-auto"
              src="/icon/quality.svg"
              width={65}
              height={65}
              alt="fit"
            />
            <div>
              <h1 className="text-[22px] font-semibold">
                Finest Quality Fabrics
              </h1>
              <p className=" text-gray-800 max-w-md leading-tight">
                Our fabric selection is diverse and rigorously chosen to match
                your style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
