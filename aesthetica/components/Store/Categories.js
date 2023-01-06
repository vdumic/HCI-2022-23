import { exploreItems } from "../../constants/NavBar";
import ExploreItem from "../Home/ExploreItem";

const Categories = () => {
  return (
    <div className="max-w-full mx-28 my-10">
      <p className="font-bold text-3xl">Choose room:</p>
      <div className="flex justify-center mt-10">
        {exploreItems.map(({ label, image }) => (
          <ExploreItem title={label} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
