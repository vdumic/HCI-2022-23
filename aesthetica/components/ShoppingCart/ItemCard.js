import CartItem from "./CartItem";

const ItemCard = ({ product }) => {
  return (
    <div className="border-2 border-bckgrnd-dark w-[1000px] h-[300px] mx-16 my-6">
      <CartItem product={product} />
    </div>
  );
};

export default ItemCard;
