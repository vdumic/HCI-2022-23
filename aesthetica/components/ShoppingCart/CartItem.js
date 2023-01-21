import Image from "next/image";

const CartItem = ({ product }) => {
  return (
    <div className="flex flex-row">
      <Image
        src={product.imagesCollection.items[0].url}
        width="300"
        height="300"
        style={{ objectFit: "cover" }}
      />
      <div className="ml-10 mt-6">
        <p className="text-2xl font-semibold mb-3">{product.title}</p>
        <p className="text-xl mb-3">Price: €{product.price}</p>
        <p className="text-xl">Quantity: 1</p>
        <button className="flex justify-center bg-bckgrnd hover:bg-bckgrnd-dark hover:border-[#3e3e42] text-[#252526] font-medium mt-8 py-2 px-10 border-2 border-[#252526] rounded-full shadow-xl">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
