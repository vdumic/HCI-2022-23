import Link from "next/link";
import Image from "next/image";
import { Slide } from "pure-react-carousel";
import { SlArrowRight } from "react-icons/sl";

const ExploreItem = ({ label, image, path }) => {
  return (
    <Slide key={label} className="sm:hidden">
      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        <Link href={`/store/${path}`}>
          <Image
            src={image.url}
            alt={label}
            height="300"
            width="600"
            className="object-cover object-center"
          />
          <button className="flex justify-center text-black text-xl text-normal py-4">
            <p>{label}</p>
            <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-2" />
          </button>
        </Link>
      </div>
    </Slide>
  );
};

export default ExploreItem;
