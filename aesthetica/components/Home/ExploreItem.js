import Link from "next/link";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";

const ExploreItem = ({ title, image, path }) => {
  return (
    <div>
      <Image
        alt={title}
        src={image}
        height="160"
        width="240"
        className="shadow-lg mx-5"
      />
      <div className="flex justify-center">
        <Link href={`/store/${path}`}>
          <button className="flex justify-center text-black text-lg text-normal py-2 px-8 ">
            <p>{title}</p>
            <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreItem;
