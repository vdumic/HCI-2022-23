import { useContext } from "react";

import AppContext from "../../store/app-context";

const TotalCard = () => {
  const appCtx = useContext(AppContext);

  const cartIsEmpty = appCtx.userData.cartItems.length === 0;

  return (
    <>
      {cartIsEmpty && (
        <div className="w-[500px] h-[450px] flex justify-center">
          <p className="text-xl my-6">Shopping cart is empty.</p>
        </div>
      )}
      {!cartIsEmpty && (
        <div className="w-[300px] h-[300px] border-4 border-bckgrnd-dark my-6 mx-10">
          <div className="flex justify-center border-b-2 border-bckgrnd-dark">
            <p className="my-4 font-medium text-xl">Order summary</p>
          </div>
          <div className="flex flex-col justify-start m-6 border-b-2 border-bckgrnd-dark">
            <p className="text-lg">
              Total price: €{appCtx.userData.totalPrice}
            </p>
            <p className="text-lg my-4">Total delivery: €20</p>
          </div>
          <div className="flex justify-center">
            <p className="my-4 text-2xl font-semibold">
              TOTAL: €{appCtx.userData.totalPrice + 20}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TotalCard;
