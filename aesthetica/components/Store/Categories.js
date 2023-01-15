import ExploreSlider from "../Home/ExploreSlider";

const Categories = ({ exploreRooms, exploreCategories }) => {
  return (
    <div className="max-w-full mx-28 my-10 sm:mx-8">
      <p className="font-bold text-3xl sm:text-2xl">Choose room:</p>
      <div className="flex justify-center mt-10">
        <ExploreSlider
          roomsClicked={true}
          exploreRooms={exploreRooms}
          exploreCategories={exploreCategories}
        />
      </div>
      <p className="font-bold text-3xl sm:text-2xl">Choose category:</p>
      <div className="flex justify-center mt-10">
        <ExploreSlider
          categoriesClicked={true}
          exploreRooms={exploreRooms}
          exploreCategories={exploreCategories}
        />
      </div>
    </div>
  );
};

export default Categories;
