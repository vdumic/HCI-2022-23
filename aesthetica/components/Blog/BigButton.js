import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const BigButton = ({ title, link }) => {
  return (
    <Link href={link}>
      <button className="flex justify-center bg-blog hover:bg-bckgrnd text-black text-m font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
        <p>{title}</p>
        <SlArrowRight className="h-5 w-5 cursor-pointer pt-1" />
      </button>
    </Link>
  );
};

export default BigButton;
