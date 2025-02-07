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
        name={"Babula"}
        day={"Өнөөдөр"}
        img1={
          "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/3-20241012043956-8soqd.png"
        }
        p={
          "Сайн бүтээгдэхүүн, яг зураг болон тайлбарласан шиг. Хурдан хүргэлт, болгоомжтой савлагаа. Дэлгүүрийн тойм маш их алдартай. Цаашид ч дэмжинэ."
        }
        img2={
          "https://bcbsfepvision.com/wp-content/uploads/2021/03/cleaning-glasses.jpg"
        }
        img3={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJmzbDLYm6AoM3Og99XctBrpRaIJBuuH2RA&s"
        }
      />
      <Commends
        name={"Joy"}
        day={"Өнөөдөр"}
        img1={
          "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/2-20241012043956-8vxtu.png"
        }
        p={
          "Тус компанийн бүтээгдэхүүн маш сайн. Бүтээгдэхүүний чанар сайн. Худалдан авах нь зүйтэй. Хурдан хүргэлт.. 5* дэлгүүрт түргэн шуурхай хүргэлт: Ням гарагийн өглөө (амралтын өдөр), Даваа гарагийн үдээс хойш."
        }
        img2={
          "https://i.guim.co.uk/img/media/24d04befa13208669862f59b45af28d9083b696f/0_131_5472_3283/master/5472.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=344e05253783f1e7fb7538a99f5bc074"
        }
        img3={
          "https://cdn.thelabrepair.com/wp-content/uploads/the-lab-phone-cleaning-1200x800.jpg"
        }
      />
      <Commends
        name={"Marga"}
        day={"Өнөөдөр"}
        img1={
          "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/4-20241012043956-szqgr.png"
        }
        p={
          "Эхний удаагийн  хүргэлт супер буухиа хүргэлтээс хамаагүй дээр. Загалтуулахгүй маш цэвэрхэн болж байна"
        }
        img2={
          "https://kungs.fi/wp-content/uploads/2021/04/IMG_5452-kypara-vinkki-01-v3-e1529574661737-1024x522-1.jpg"
        }
        img3={
          "https://mcn-images.bauersecure.com/wp-images/25823/420x280/motorcycle-helmet-advice-cl.jpg"
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
