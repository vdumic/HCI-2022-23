import { useState } from "react";

const QuantityCounter = () => {
  const [number, setNumber] = useState(1);

  const updateQuantity = (value) => {
    setNumber((prevState) => prevState + value);
  };

  return (
    <div className="h-[40px] w-[188px]">
      <div class="flex flex-row h-[40px] w-[188px] rounded-full relative bg-gray-300 py-2"> 
        <button
          onClick={() => updateQuantity(-1)}
          className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-full rounded-full cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <span className="flex items-center outline-none outline-none ml-9 text-center w-full bg-gray-300 font-semibold text-md text-black focus:text-black">
          {number}
        </span>
        <button
          onClick={() => updateQuantity(+1)}
          className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-full rounded-full cursor-pointer"
        >
          <span className="flex justify-center text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
export default QuantityCounter;
