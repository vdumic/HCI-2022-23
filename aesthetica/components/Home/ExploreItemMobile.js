import Link from "next/link";
import Image from "next/image";
import { Slide } from "pure-react-carousel";

const ExploreItemMobile = ({ label, image, path, index }) => {
  return (
    <Slide index={index} key={label}>
      <div className="flex flex-col flex-shrink-0 relative">
        <Link href={`/store/${path}`}>
          <Image
            src={image}
            alt={label}
            width="240"
            className="object-cover object-center w-full"
          />
        </Link>
        <Link href={`/store/${path}`}>
          <button className="text-black text-xl text-normal">
            <p>{label}</p>
          </button>
        </Link>
      </div>
    </Slide>
  );
};

export default ExploreItemMobile;
