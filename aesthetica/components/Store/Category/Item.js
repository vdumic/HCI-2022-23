import Image from "next/image";
import Link from "next/link";

const Item = ({ image, name, price, path }) => {
  return (
    <div className="m-4">
      <Link href={`/store/product/${path}`}>
        <Image
          alt={name}
          src={image}
          style={{ objectFit: "cover" }}
          width="320"
          height="340"
          className="h-[340px] shadow-xl hover:scale-105"
        />
        <p className="text-xl font-normal py-2">{name}</p>
      </Link>
      <p className="text-2xl font-semibold">{price}€</p>
    </div>
  );
};

export default Item;
