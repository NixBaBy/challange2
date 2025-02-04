"use client";
import React, { useState } from "react";

const CheckboxGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="p-2 space-y-2 bg-white w-[377px] h-[177px] rounded-lg mt-5">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="option1"
          name="option1"
          checked={selectedOptions.option1}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="option1" className="text-[12px]">
          1 бүтээгдэхүүний үнэ: 39,000₮ + 6,000₮ (хүргэлтийн төлбөртэй)
        </label>
        <div
          style={{
            backgroundImage:
              "url('https://w.ladicdn.com/614d4f7443928c0014d91fd8/hot-icon-1-20200305071126-20220309075525-20230727034658-ozieb.gif')",
          }}
          className="w-[43px] h-[43px] bg-cover bg-center"
        ></div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="option2"
          name="option2"
          checked={selectedOptions.option2}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="option2" className="text-[12px]">
          2 бүтээгдэхүүний үнэ: 69,000₮ + үнэгүй хүргэлт
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="option3"
          name="option3"
          checked={selectedOptions.option3}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="option3" className="text-[12px]">
          3 бүтээгдэхүүн худалдаж авбал 1 бүтээгдэхүүн үнэгүй: 99,000₮ + үнэгүй
          хүргэлт
        </label>
        <div
          style={{
            backgroundImage:
              "url('https://w.ladicdn.com/614d4f7443928c0014d91fd8/hot-icon-1-20200305071126-20220309075525-20230727034658-ozieb.gif')",
          }}
          className="w-[43px] h-[43px] bg-cover bg-center"
        ></div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="option4"
          name="option4"
          checked={selectedOptions.option4}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="option4" className="text-[12px]">
          4 бүтээгдэхүүн худалдаж авбал 2 бүтээгдэхүүн үнэгүй: 119,000₮ + үнэгүй
          хүргэлт
        </label>
      </div>
    </div>
  );
};

export default CheckboxGroup;
