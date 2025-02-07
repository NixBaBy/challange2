"use client";
import React, { useState } from "react";

const CheckboxGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="p-2 space-y-2 bg-white w-[377px] h-[177px] rounded-lg mt-5 flex flex-col gap-4 pt-5">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="option1"
          name="option1"
          checked={selectedOptions.option1}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="option1" className="text-[14px] font-bold">
          Нүдний шилний салфетик 2ш цэнхэр 18'000
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
        <label htmlFor="option2" className="text-[14px] font-bold">
          Нүдний шилний салфетик 4ш цэнхэр 20'000
        </label>
        <div
          style={{
            backgroundImage:
              "url('https://w.ladicdn.com/614d4f7443928c0014d91fd8/hot-icon-1-20200305071126-20220309075525-20230727034658-ozieb.gif')",
          }}
          className="w-[43px] h-[43px] bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
