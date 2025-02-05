import { Globe, Lock, Mail, MessageSquare } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(204,116,42,0.6293110994397759) 100%, rgba(213,143,16,0) 100%),url('https://w.ladicdn.com/s750x950/64b4ca9d946c60001210f97b/city-landscape-at-night-20240405042539-0wpv3.jpg')",
      }}
      className="w-[421px] h-[352px] bg-cover bg-center "
    >
      <h3 className="text-[35px] font-bold text-white pt-4 text-center">
        SKIN CARE
      </h3>
      <div className="text-white p-[10px] flex flex-col gap-2">
        <div className="flex gap-2 ">
          <Mail />
          <div className="flex">
            <p>Email:</p>
            <p> decor99@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Globe />
          <p>https://www.beautymongolia.store/lazy-men-cream</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3>CUSTOMER SERVICE</h3>
          <div className="flex justify-around ">
            <div>
              <div className="flex">
                <img src="/Contact1.svg" alt="" className="w-[22px] h-[22px]" />
                <p>Returns & Shipping Policy</p>
              </div>
              <div className="flex">
                <img src="/Contact2.svg" alt="" className="w-[20px] h-[20px]" />
                <p>Terms of Use</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <Lock />
                <p>Privecy & Policy</p>
              </div>
              <div className="flex">
                <MessageSquare />
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
