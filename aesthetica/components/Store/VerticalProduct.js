import Image from "next/image";

const VerticalProduct = ({ image }) => {
  return (
    <Image alt="Recommended" src={image} height="340" className="w-full" />
  );
};

export default VerticalProduct;
