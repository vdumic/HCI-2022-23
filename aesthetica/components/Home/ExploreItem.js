import Link from "next/link";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";

const ExploreItem = ({ title, image, path }) => {
  return (
    <div className="sm:w-4/6">
      <Link href={`/store/${path}`}>
        <Image
          alt={title}
          src={image}
          height="160"
          width="240"
          className="shadow-lg mx-5 sm:mx-auto"
        />
        <div className="flex justify-center">
          <button className="flex justify-center text-black text-xl text-normal py-2 px-8 ">
            <p>{title}</p>
            <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-2" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ExploreItem;
