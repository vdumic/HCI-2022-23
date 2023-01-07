import Image from "next/image";
import Link from "next/link";

const Item = ({ image, name, price, path }) => {
  return (
    <div className="m-4">
      <Image
        alt={name}
        src={image}
        width="320"
        height="337"
        className="shadow-xl"
      />
      <Link href={`/store/dining_room/${path}`}>
        <p className="text-xl font-normal py-2">{name}</p>
      </Link>
      <p className="text-2xl font-semibold">{price}€</p>
    </div>
  );
};

export default Item;
