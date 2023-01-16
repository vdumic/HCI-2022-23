import Item from "./Item";

const ItemsList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1">
      {products.map((product) => (
        <Item
          name={product.title}
          price={product.price}
          image={product.imagesCollection.items[0].url}
          room={product.room}
          path={product.slug}
          key={product.slug}
        />
      ))}
    </div>
  );
};

export default ItemsList;
