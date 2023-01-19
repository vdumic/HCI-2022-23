import ColorPicker from "./ColorPicker";

const ProductInformation = ({ title, price }) => {
  return (
    <div className="flex flex-col w-2/4 items-start">
      <div className="text-4xl font-semibold mb-8">
        <p>{title}</p>
      </div>
      <div className="text-3xl font-medium mb-4">Color:</div>
      <ColorPicker />
      <div className="mt-8 text-3xl font-medium mb-5">€{price}</div>
      <div className="text-3xl font-medium mb-4">Quantity:</div>
    </div>
  );
};

export default ProductInformation;
