import Link from "next/link";
import ExploreButton from "./ExploreButton";
import ExploreItem from "./ExploreItem";
import { SlArrowRight } from "react-icons/sl";

import { exploreItems } from "../../constants/RoomsExplore";

const Explore = () => {
  return (
    <div className="max-w-full mx-28 mt-10 sm:mx-8">
      <p className="font-bold text-3xl">Explore:</p>
      <div className="flex justify-start sm:hidden">
        <ExploreButton title="Rooms" isClicked="true" />
        <ExploreButton title="Categories" />
        <ExploreButton title="Offers" />
      </div>
      <div className="flex justify-center mt-10 sm:grid sm:grid-cols-1">
        {exploreItems.map(({ label, image, path }) => (
          <ExploreItem title={label} image={image} path={path} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link href="/store">
          <button className="flex justify-center text-black text-2xl font-normal py-2 px-8 sm:text-xl">
            <p>More rooms</p>
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
