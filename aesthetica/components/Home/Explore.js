import Link from "next/link";
import ExploreButton from "./ExploreButton";
import ExploreItem from "./ExploreItem";
import { SlArrowRight } from "react-icons/sl";

import { exploreItems } from "../../constants/NavBar";

const Explore = () => {
  return (
    <div className="max-w-full mx-28 mt-10">
      <p className="font-bold text-3xl">Explore:</p>
      <div className="flex justify-start">
        <ExploreButton title="Rooms" isClicked="true" />
        <ExploreButton title="Categories" />
        <ExploreButton title="Offers" />
      </div>
      <div className="flex justify-center mt-10">
        {exploreItems.map(({ label, image }) => (
          <ExploreItem title={label} image={image} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link href="/store">
          <button className="flex justify-center text-black text-2xl font-normal py-2 px-8 ">
            <p>More rooms</p>
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
