const ProductInformation = ({ title, price }) => {
  return (
    <div className="flex flex-col w-2/4 items-start">
      <div className="text-5xl font-bold mb-6">{title}</div>
      <div className="text-4xl font-semibold">{price}€</div>
    </div>
  );
};

export default ProductInformation;
