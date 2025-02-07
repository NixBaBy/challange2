import React from "react";

type CheckboxGroupProps = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  name: string;
  value: string;
};

const CheckboxGroup = ({ setSelectedOption, error, name, value }: CheckboxGroupProps) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-2 space-y-2 bg-white w-[377px]  h-[177px] rounded-lg mt-5 flex flex-col justify-center gap-2">
      <div className="flex items-center">
        <input
          type="radio"
          id="option1"
          name={name}
          value="option1"
          checked={value === "option1"}
          onChange={handleRadioChange}
          className="mr-2 h-7 w-7"
        />
        <label htmlFor="option1" className="text-[15px] font-bold">
        Нүдний шилний салфетик 2ш цэнхэр 18&apos;000
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="option2"
          name={name}
          value="option2"
          checked={value === "option2"}
          onChange={handleRadioChange}
          className="mr-2 h-7 w-7"
        />
        <label htmlFor="option2" className="text-[15px] font-bold">
        Нүдний шилний салфетик 3ш цэнхэр 19&apos;000
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="option3"
          name={name}
          value="option3"
          checked={value === "option3"}
          onChange={handleRadioChange}
          className="mr-2 h-7 w-7"
        />
        <label htmlFor="option3" className="text-[15px] font-bold">
        Нүдний шилний салфетик 4ш цэнхэр 20&apos;000
        </label>
      </div>
      {/* Checkbox validation error */}
      {error && (
        <small className="text-[red]">{error}</small>
      )}
    </div>
  );
};

export default CheckboxGroup;