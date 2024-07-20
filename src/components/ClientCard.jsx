import React from "react";

function ClientCard({ customerName, type, review, isBlack }) {
  return (
    <div
      className={`w-[350px] p-5 px-11 rounded-md shadow-xl ${isBlack||"text-white"} text-left `}
      style={{
        boxShadow:" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        background: isBlack?"linear-gradient(135deg, #E3E3E3ba 0%, #FFFFFF 62%)": "linear-gradient(135deg, #E0AC58 0%, #F6D093 56%)",
      }}
    >
      <img
        src={isBlack ? "/icon/qutoesBlack.svg" : "/icon/qutoesWhite.svg"}
        alt='"'
      />
      <p className="text-[14px]">{review}</p>
      <h1 className="font-bold text-[22px] my-1  mt-7">
        {customerName}
        <span className="text-[#666] mx-1 font-medium text-[10px]">{type}</span>
      </h1>
    </div>
  );
}

export default ClientCard;
