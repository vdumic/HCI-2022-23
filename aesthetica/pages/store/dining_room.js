import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import StoreSearch from "../../components/Store/StoreSearch";
import ItemsList from "../../components/Store/Category/ItemsList";

const DiningRoom = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-28 my-10">
        <p className="font-bold text-3xl text-[#777777]">Dining room</p>
        <AiOutlineRight className="h-7 w-7 sm:inline pt-3" />
        <p className="font-bold text-3xl">Chairs</p>
      </div>
      <StoreSearch />
      <div className="flex justify-evenly mx-28 my-10">
        <ItemsList />
      </div>
      <div className="flex justify-center my-10">
        <Link href="/store/dining_room">
          <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
            <p>Load more</p>
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
          </button>
        </Link>
      </div>
    </HeaderFooterLayout>
  );
};

export default DiningRoom;
