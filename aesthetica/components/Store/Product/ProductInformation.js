import ColorPicker from "./ColorPicker";
import QuantityCounter from "./QuantityCounter";

const ProductInformation = ({ title, price }) => {
  return (
    <div className="flex flex-col lg:w-3/4 lg:ml-36 items-start">
      <div className="text-5xl sm:text-3xl mb-4 sm:mt-5 sm:mb-2 font-semibold">
        <p>{title}</p>
      </div>
      <div className="text-4xl sm:text-3xl text-gray-500 font-semibold lg:mb-20 sm:mb-8">€{price}</div>
      <div className="text-2xl font-medium mb-4">Color:</div>
      <ColorPicker />
      <div className="text-2xl font-medium mb-4">Quantity:</div>
      <QuantityCounter />
       <button
          className="flex inline justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-14 border-2 border-[#252526] rounded-full shadow-xl"
        >Add to cart</button>
    </div>
  );
};

export default ProductInformation;
