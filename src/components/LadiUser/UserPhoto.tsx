import React from "react";

const UserPhoto = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://cbu01.alicdn.com/img/ibank/O1CN016Ej2c31Y3smK9MI0p_!!2215812213004-0-cib.jpg')",
      }}
      className="w-[419px] h-[552px] mt-[40px] bg-cover bg-center mt-[-20px] relative"
    >
      <div className="text-black absolute top-[110px] mt-[-10px] bg-gray-100 flex flex-col gap-3 text-center">
        <p className="bg-purple-600 text-white text-center rounded-lg ml-10  p-[3px] w-[80%]">
          Хэрэглэхийн өмнө хэрэглэх зааврыг анхааралтай уншина уу
        </p>
        <p className="text-[13px] font-bold pt-[10px]">
          Хэрэглэх заавар: Савлагааг нээж, нойтон алчуурыг дэлгэнэ. Линзний
          гадаргуу дээр нэг чиглэлд зөөлөн, жигд арчиж, манангийн эсрэг
          шингэнийг линзний гадаргуу дээр жигд түрхэж, агаарт хатаана.
        </p>
        <p className="text-[13px] font-bold">
          Хэрэглэх хүрээ: Бүх төрлийн нүдний шил, линз, линзний гадаргууг арчих,
          мөн угаалгын өрөөний толь, машины арын толинд хэрэглэхэд тохиромжтой.
        </p>
        <p className="text-[13px] font-bold">
          Анхаарах зүйлс: Савлагааг нээсний дараа шууд хэрэглэнэ. Тусгай
          бүрхүүлтэй линз, дэлгэц нь аюулгүй эсэхийг баталгаажуулахын тулд
          үйлдвэрлэгчтэй зөвлөлдөнө үү. Өрөөний температурт хадгалж, галаас хол
          байлга.
        </p>
        <p className="text-[13px] font-bold mt-4">
          Тэмдэглэл: Манангийн эсрэг бүрхүүл түрхсэн линзний гадаргууг бусад
          нойтон алчуураар арчиж болохгүй, усаар зайлж болохгүй, эс тэгвээс
          линзний манангийн эсрэг бүрхүүл үр дүнгүй болох эсвэл манангийн эсрэг
          үр нөлөө буурах болно.
        </p>
      </div>

    </div>
  );
};

export default UserPhoto;
