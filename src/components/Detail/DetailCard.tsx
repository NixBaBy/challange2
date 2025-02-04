import React from "react";

const DetailCard = ({ img, p }: { img: string; p: string }) => {
  return (
    <div className="border-[2px] rounded-[15px] border-solid border-[white] w-[388px] h-[293px] bg-white ml-[20px] flex flex-col items-center">
      <img src={img} alt="" className="w-[303px] h-[239px]" />
      <p className="font-bold text-[16px] text-center">{p}</p>
    </div>
  );
};

export default DetailCard;
