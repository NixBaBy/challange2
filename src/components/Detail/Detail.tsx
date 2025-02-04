import React from "react";
import DetailCard from "./DetailCard";

const Detail = () => {
  return (
    <div className="bg-[#2F2F2F] w-full mt-5 ">
      <div className="pt-10 flex flex-col gap-10">
        <DetailCard
          img={
            "https://w.ladicdn.com/s650x550/6513a52323c204001244ad79/unnamed-removebg-preview-20241018064725-j_dv8.png"
          }
          p={"Жинхэнэ өндөр чанартай бүтээгдэхүүн"}
        />
        <DetailCard
          img={
            "https://w.ladicdn.com/s550x550/614d4f7443928c0014d91fd8/icon-3-20191224125329-20230817015823-p9-kt-20240605081718-phq74.png"
          }
          p={"Хот дотор хүргэлт үнэгүй"}
        />

        <DetailCard
          img={
            "https://w.ladicdn.com/s650x600/6513a52323c204001244ad79/istockphoto-1363270862-170667a-removebg-preview-20241018065555-wgpvu.png"
          }
          p={"24/7 хэрэглэгчийн үйлчилгээ бүх асуултанд хариулдаг"}
        />
      </div>
    </div>
  );
};

export default Detail;
