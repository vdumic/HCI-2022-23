import { useState, useContext } from "react";
import { BiShoppingBag, BiHeart } from "react-icons/bi";

import AppContext from "../../../store/app-context";
import ColorPicker from "./ColorPicker";

const ProductInformation = ({ title, price, slug, image }) => {
  const appCtx = useContext(AppContext);

  const [number, setNumber] = useState(1);

  const updateQuantity = (value) => {
    setNumber((prevState) => prevState + value);
  };

  const handleAddToCart = () => {
    appCtx.handleAddToCart(slug, title, price, number, image);
  };

  return (
    <div className="flex flex-col lg:w-3/4 lg:ml-36 items-start">
      <div className="text-4xl sm:text-3xl mb-4 sm:mt-5 sm:mb-2 font-semibold">
        <p>{title}</p>
      </div>
      <div className="text-3xl sm:text-3xl text-gray-500 font-semibold lg:mb-20 sm:mb-8">
        €{price}
      </div>
      <div className="text-2xl font-medium mb-4">Color:</div>
      <ColorPicker />
      <div className="text-2xl font-medium mb-4">Quantity:</div>
      <div className="h-[40px] w-[188px]">
        <div className="flex flex-row h-[40px] w-[188px] rounded-full relative bg-gray-300 py-2">
          <button
            onClick={() => updateQuantity(-1)}
            className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-full rounded-full cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <span className="flex items-center outline-none  ml-9 text-center w-full bg-gray-300 font-semibold text-md text-black focus:text-black">
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
      <button
        className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl"
        onClick={handleAddToCart}
      >
        <p>Add to cart</p>
        <BiShoppingBag className="ml-2 h-5 w-5" />
      </button>
      <button
        className="flex justify-center bg-bckgrnd hover:bg-bckgrnd-dark hover:border-[#3e3e42] text-[#252526] font-medium mt-8 py-2 px-10 border-2 border-[#252526] rounded-full shadow-xl"
        onClick={handleAddToCart}
      >
        <p>Add to wishlist</p>
        <BiHeart className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default ProductInformation;
