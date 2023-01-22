import Item from "./Item";

const ItemsList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1">
      {products.map((product) => (
        <Item
          name={product.title}
          price={product.price}
          image1={product.imagesCollection.items[0].url}
          image2={product.imagesCollection.items[4].url}
          path={product.slug}
          key={product.slug}
        />
      ))}
    </div>
  );
};

export default ItemsList;
