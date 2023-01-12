import { exploreRooms } from "../../constants/Explore";
import ExploreItem from "../Home/ExploreItem";

const Categories = () => {
  return (
    <div className="max-w-full mx-28 my-10">
      <p className="font-bold text-3xl">Choose room:</p>
      <div className="flex justify-center mt-10">
        {exploreRooms.map(({ label, image, path }) => (
          <ExploreItem title={label} image={image} path={path} key={label} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
