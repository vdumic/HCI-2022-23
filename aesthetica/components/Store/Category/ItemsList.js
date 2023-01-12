import Item from "./Item";
import { chairs } from "../../../constants/Chairs";

const ItemsList = () => {
  return (
    <div className="grid grid-cols-3">
      {chairs.map(({ label, price, image, path }) => (
        <Item
          name={label}
          price={price}
          image={image}
          path={path}
          key={label}
        />
      ))}
    </div>
  );
};

export default ItemsList;
