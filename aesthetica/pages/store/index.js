import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Categories from "../../components/Store/Categories";
import RecommendedProducts from "../../components/Store/RecommendedProducts";

const Store = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <Categories />
      <RecommendedProducts />
    </HeaderFooterLayout>
  );
};

export default Store;
