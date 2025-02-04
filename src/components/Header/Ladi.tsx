import React from "react";
import LadiBot from "./LadiBot";

const Ladi = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            "url('https://w.ladicdn.com/s750x1050/6513a52323c204001244ad79/db54a48543fe503a4b568f4f622ac60c1036111488581006449649en224065dcb3fc5772c900a9236bcfcfa9e-20241029074132-xklvo-20241120044650-m0u6x.jpg')",
        }}
        className="bg-cover h-[610px] mt-[-3px]  relative"
      >
        <div
          style={{
            backgroundImage:
              "url('https://w.ladicdn.com/6513a52323c204001244ad79/e8d4a73a29c5969e82e565a12585dba21036111488581006449649en222f548b1c58865fd8b282d4e9eea240a-20241029074133-kzdbq-20241120044742-l6y1t.gif')",
          }}
          className="w-[200px] h-[250px] bg-cover absolute right-0 bottom-2 rounded-[15px] border-[1px] border-solid border-white"
        ></div>
      </div>
      <LadiBot />
    </div>
  );
};

export default Ladi;
