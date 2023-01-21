import { useContext } from "react";
import Image from "next/image";

import AppContext from "../../store/app-context";

const CartItem = ({ product }) => {
  const appCtx = useContext(AppContext);

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    appCtx.handleRemoveFromCart(product[0], product[2], product[3]);
  };

  return (
    <div className="flex lg:flex-row flex-col sm:justify-center md:justify-center">
      <Image
        src={product[4]}
        alt={product[1]}
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
        className="w-[300px] h-[296px]"
      />
      <div className="ml-10 mt-6">
        <p className="text-2xl font-semibold mb-3">{product[1]}</p>
        <p className="text-xl mb-3">Price: €{product[2]}</p>
        <p className="text-xl">Quantity: {product[3]}</p>
        <button
          className="flex justify-center bg-bckgrnd hover:bg-bckgrnd-dark hover:border-[#3e3e42] text-[#252526] font-medium mt-8 py-2 px-10 border-2 border-[#252526] rounded-full shadow-xl"
          onClick={handleRemoveFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
