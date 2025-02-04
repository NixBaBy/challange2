import { ShoppingCart } from "lucide-react";
import React from "react";

import BigSale from "./BigSale";

const LadiBot = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s768x477/6513a52323c204001244ad79/3e271b097c955d6dcdef83b92a1e124f-20241008045232-2c0-i.jpg')",
      }}
      className="bg-cover h-[477px] w-full flex flex-col items-center"
    >
      <div className="text-center text-white font-bold text-[14px] ">
        <h3 className="pt-3"> Эрэгтэйчүүдэд зориулсан өнгөлөгч</h3>
        <p>
          Арьсны хорт бодисыг гадагшлуулж, арьсыг чангалж, аюулгүй, хоргүй
          байгалийн гаралтай найрлагатай
        </p>
      </div>
      <div className="text-white flex gap-2 justify-center mt-4">
        <div className=" flex gap-1 border-r-[1px] border-solid border-black pr-2">
          <p className="underline">5,0</p>
          <div className="flex">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
          </div>
        </div>
        <div className="flex gap-1 border-r-[1px] border-solid border-black pr-2">
          <p className="underline">916</p>
          <p>Үнэлгээ хийх</p>
        </div>
        <div className="flex gap-1 ">
          <ShoppingCart />
          <p className="underline">8.2k</p>
        </div>
      </div>
      <div className="mt-10">
        <BigSale />
      </div>
      <div className="w-[291px] h-[60px] bg-white shadow-[rgb(0, 0, 0) 0px 15px 20px -15px] flex justify-center items-center mt-5">
        <p className="text-[#731414] text-[18px] font-bold">
          Одоо худалдаж авах
        </p>
      </div>
    </div>
  );
};

export default LadiBot;
