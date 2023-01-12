import { useState } from "react";
import Link from "next/link";
import ExploreButton from "./ExploreButton";
import ExploreItem from "./ExploreItem";
import { SlArrowRight } from "react-icons/sl";

import { exploreRooms, exploreCategories } from "../../constants/Explore";

const Explore = () => {
  const [roomsClicked, setRoomsClicked] = useState(true);
  const [categoriesClicked, setCategoriesClicked] = useState(false);
  const [offersClicked, setOffersClicked] = useState(false);

  const handleRoomsClick = (e) => {
    e.preventDefault();
    setRoomsClicked(!roomsClicked);
    setCategoriesClicked(false);
    setOffersClicked(false);
  };

  const handleCategoriesClick = (e) => {
    e.preventDefault();
    setCategoriesClicked(!categoriesClicked);
    setRoomsClicked(false);
    setOffersClicked(false);
  };

  const handleOfferssClick = (e) => {
    e.preventDefault();
    setOffersClicked(!offersClicked);
    setCategoriesClicked(false);
    setRoomsClicked(false);
  };

  return (
    <div className="max-w-full mx-28 mt-10 sm:mx-8">
      <p className="font-bold text-3xl sm:text-2xl">Explore:</p>
      <div className="flex justify-start">
        <ExploreButton
          title="Rooms"
          isClicked={roomsClicked}
          handleClick={handleRoomsClick}
        />
        <ExploreButton
          title="Categories"
          isClicked={categoriesClicked}
          handleClick={handleCategoriesClick}
        />
        <ExploreButton
          title="Offers"
          isClicked={offersClicked}
          handleClick={handleOfferssClick}
        />
      </div>
      <div className="flex justify-center mt-10 sm:grid sm:grid-cols-1">
        {roomsClicked &&
          exploreRooms.map(({ label, image, path }) => (
            <ExploreItem title={label} image={image} path={path} key={label} />
          ))}
        {categoriesClicked &&
          exploreCategories.map(({ label, image, path }) => (
            <ExploreItem title={label} image={image} path={path} key={label} />
          ))}
      </div>
      <div className="flex justify-center my-10">
        <Link href="/store">
          <button className="flex justify-center text-black text-2xl font-normal py-2 px-8 sm:text-xl">
            {roomsClicked && <p>More rooms</p>}
            {categoriesClicked && <p>Search store</p>}
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
