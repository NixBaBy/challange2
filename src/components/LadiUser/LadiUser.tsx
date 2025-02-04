import React from "react";
import UserPhoto from "./UserPhoto";
import MensCream from "./MensCream";
import CareInfo from "./CareInfo";
const LadiUser = () => {
  return (
    <div>
      <UserPhoto />
      <div
        style={{
          backgroundImage: "url('/image1.jpg')",
        }}
        className="w-[402px] h-[502px] bg-cover bg-center  relative"
      >
        <p className="text-[16px] font-bold text-black text-center  bg-white pt-[95px]">
          Та оройтож унтах, ядарсны улмаас арьс тань хөгшин, хар харагдаж байна
          уу ?
        </p>
      </div>
      <MensCream />
      <p className="text-[10px] font-bold text-center">
        1 лонх олон талын ашиг тустай <br /> Гялалзалтыг нэмэгдүүлэх + Үр дүнтэй
        өнгөлөгч + Чийгшүүлэгч
      </p>
      <CareInfo />
    </div>
  );
};

export default LadiUser;
