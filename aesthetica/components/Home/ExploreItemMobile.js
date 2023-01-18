import Link from "next/link";
import Image from "next/image";
import { Slide } from "pure-react-carousel";

const ExploreItemMobile = ({ label, image, path }) => {
  return (
    <Slide key={label}>
      <div className="flex flex-col flex-shrink-0 items-center justify-center">
        <Link href={`/store/${path}`}>
          <Image
            src={image.url}
            alt={label}
            style={{ objectFit: 'cover' }}
            height="100"
            width="240"
            className="h-[200px] w-[370px] object-center shadow-lg"
          />
        </Link>
        <Link href={`/store/${path}`}>
          <button className="text-black text-xl text-normal pt-2">
            <p>{label}</p>
          </button>
        </Link>
      </div>
    </Slide>
  );
};

export default ExploreItemMobile;
