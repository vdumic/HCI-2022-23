import { exploreItems } from "../../constants/RoomsExplore";
import ExploreItem from "../Home/ExploreItem";

const Categories = () => {
  return (
    <div className="max-w-full mx-28 my-10">
      <p className="font-bold text-3xl">Choose room:</p>
      <div className="flex justify-center mt-10">
        {exploreItems.map(({ label, image, path }) => (
          <ExploreItem title={label} image={image} path={path} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
