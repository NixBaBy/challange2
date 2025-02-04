import React from "react";

const MensCream = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s750x1000/6513a52323c204001244ad79/1-20241121010958--m6g3.jpg')",
      }}
      className="w-full h-[608px] bg-center bg-cover relative"
    >
      <div className="pt-5 flex flex-col gap-2">
        <p className="text-[16px] font-bold text-center">
          Байгалийн өнгө - цэвэршүүлсэн, эрэгтэйлэг
        </p>
        <p className="text-[10px] font-bold text-center">
          Эрэгтэйчүүдэд зориулсан олон төрлийн арьсны тос
        </p>
      </div>
      <div className="text-[10px] font-bold text-center flex gap-3 absolute bottom-10 left-1 text-white">
        <p className="w-[102px]">Байгалийн гэрэлтүүлэг</p>
        <p className="w-[92px]">Үр дүнтэй өнгөлөгч</p>
        <p className="w-[92px]">Тосыг хянах, будалт барих</p>
        <p>Хөнгөн жинтэй</p>
      </div>
    </div>
  );
};

export default MensCream;
