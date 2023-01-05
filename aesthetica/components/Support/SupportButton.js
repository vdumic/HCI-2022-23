import { SlArrowRight } from "react-icons/sl";

const SupportButton = ({ title }) => {
  return (
    <div className="flex justify-center m-12">
      <button class="flex justify-center bg-white hover:bg-gray-100 text-black text-m py-2 px-4 border-2 border-black rounded-full shadow-lg">
        <p>{title}</p>
        <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
      </button>
    </div>
  );
};

export default SupportButton;
