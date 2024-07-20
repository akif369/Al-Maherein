import React from "react";

function Card({ url, heading, detail }) {
  return (
    <div className="flex flex-col pb-7 mx-auto text-left font-montserrat text-xs font-medium bg-white rounded-md shadow-lg max-w-[300px] h-full">
      <img
        loading="lazy"
        src={url}
        alt="card"
        className="w-full aspect-[1.43] object-cover"
      />
      <div className="flex flex-col flex-grow px-8 mt-3.5 w-full">
        <div className="text-base text-zinc-900 text-pretty">{heading}</div>
        <div className="mt-7 leading-5 text-zinc-900 text-opacity-80 flex-grow">
          {detail}
          <br />
        </div>
        <div className="mt-11 text-amber-500 leading-[150%]">
          <a href="/#booknow">Book Now</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
