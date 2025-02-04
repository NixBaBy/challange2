import React from "react";
import Commends from "./Commends";

const UserCommends = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[24px] font-bold text-[#013A44] uppercase">
        Хэрэглэгчийн сэтгэгдэл
      </h3>
      <div className="flex items-center gap-5 mt-2">
        <div className="flex items-center gap-2">
          <h3 className="text-[15px] font-bold  underline text-[#017385]">
            4.8/5
          </h3>
          <img
            src="https://w.ladicdn.com/s400x350/5c7362c6c417ab07e5196b05/sao-star-20231010094822-vteoa.png"
            alt=""
            className="w-[87px] h-[17px]"
          />
          <p className="text-[15px] text-[#2F2F2F] ">(15.5k)</p>
        </div>
        <div className="h-[20px] w-[1px] bg-[gray]"></div>
        <div className="flex gap-2">
          <p className="text-[15px] font-bold text-[#2F2F2F]">Борлуулсан</p>
          <h3 className="text-[15px] font-bold  underline text-[#017385]">
            148.5k
          </h3>
        </div>
      </div>
      <Commends
        name={"Abaka"}
        day={"Өнөөдөр"}
        img1={
          "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/3-20241012043956-8soqd.png"
        }
        p={
          "Сайн бүтээгдэхүүн, яг зураг болон тайлбарласан шиг. Хурдан хүргэлт, болгоомжтой савлагаа. Дэлгүүрийн тойм маш их алдартай. Цаашид ч дэмжинэ."
        }
        img2={
          "https://w.ladicdn.com/s500x550/6513a52323c204001244ad79/5_11zon-20241121013325-cw_bp.png"
        }
        img3={
          "https://w.ladicdn.com/s500x550/6513a52323c204001244ad79/7_11zon-20241121013325-ze5q-.png"
        }
      />
      <Commends
        name={"Baasan"}
        day={"Өнөөдөр"}
        img1={
          "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/2-20241012043956-8vxtu.png"
        }
        p={
          "Тус компанийн бүтээгдэхүүн маш сайн. Бүтээгдэхүүний чанар сайн. Худалдан авах нь зүйтэй. Хурдан хүргэлт.. 5* дэлгүүрт түргэн шуурхай хүргэлт: Ням гарагийн өглөө (амралтын өдөр), Даваа гарагийн үдээс хойш."
        }
        img2={
          "https://w.ladicdn.com/s500x550/6513a52323c204001244ad79/1_11zon-20241121013325-09j46.png"
        }
        img3={
          "https://w.ladicdn.com/s500x550/6513a52323c204001244ad79/2_11zon-20241121013325-h_d4s.png"
        }
      />
      <Commends
        name={"Altan"}
        day={"Өнөөдөр"}
        img1={
          "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/4-20241012043956-szqgr.png"
        }
        p={
          "Эхний удаагийн буухиа хүргэлт супер буухиа хүргэлтээс хамаагүй дээр. Арьсыг толигор болгож, нөсөө толбыг дарангуйлж, тосны шүүрлийг зохицуулна"
        }
        img2={
          "https://w.ladicdn.com/s500x550/6513a52323c204001244ad79/3_11zon-20241121013325-pu5k8.png"
        }
        img3={
          "https://w.ladicdn.com/s500x550/6513a52323c204001244ad79/4_11zon-20241121013325--6fgw.png"
        }
      />
      <div className="flex gap-7 items-center mt-5 ml-[-80px]">
        <img
          src="https://w.ladicdn.com/5c7362c6c417ab07e5196b05/typing-animation-3x-20190902093018-20200106170119-20231109164053-x-tjc.gif"
          alt=""
          className="w-[72px] h-[43px]"
        />
        <h3>Хэн нэгэн сэтгэгдэл бичиж байна</h3>
      </div>
    </div>
  );
};

export default UserCommends;
