import { useContext } from "react";

import AppContext from "../../store/app-context";

import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import ItemCard from "../../components/ShoppingCart/ItemCard";
import TotalCard from "../../components/ShoppingCart/TotalCard";

const ShoppingCart = () => {
  const appCtx = useContext(AppContext);

  return (
    <HeaderFooterLayout title="Aesthetica / Shopping cart">
      <div className="flex justify-center my-10">
        <p className="font-semibold text-4xl sm:text-3xl">Shopping cart</p>
      </div>
      <div className="flex flex-row justify-around">
        <div>
          {appCtx.userData.cartItems.map((product) => (
            <ItemCard product={product} />
          ))}
        </div>
        <TotalCard />
      </div>
    </HeaderFooterLayout>
  );
};

export default ShoppingCart;
