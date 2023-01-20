import Image from "next/image";

const ProductImages = ({ images }) => {
  return (
    <div className="flex">
      <Image
        src={images[0].url}
        alt="product image"
        width="650"
        height="650"
        style={{ objectFit: "cover" }}
        className="lg:h-[560px] lg:w-[590px]"
      />
    </div>
  );
};

export default ProductImages;
