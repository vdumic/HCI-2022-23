import { getProductBySlug } from "../api/ContentfulAPI";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import ItemCard from "../../components/ShoppingCart/ItemCard";

const ShoppingCart = ({ product }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Shopping cart">
      <div className="flex justify-center my-10">
        <p className="font-semibold text-4xl sm:text-3xl">Shopping cart</p>
      </div>
      <div className="flex flex-col justify-start">
        <ItemCard product={product} />
      </div>
    </HeaderFooterLayout>
  );
};

export default ShoppingCart;

export async function getStaticProps() {
  const product = await getProductBySlug("capitol-chair");

  return {
    props: { product: product },
  };
}
