import Image from "next/image";

const ProductImages = ({ images }) => {
  return (
    <div className="flex justify-center">
      <Image
        src={images[0].url}
        width="650"
        height="650"
        style={{ objectFit: "cover" }}
        className="h-[650px] w-[650px]"
      />
    </div>
  );
};

export default ProductImages;
