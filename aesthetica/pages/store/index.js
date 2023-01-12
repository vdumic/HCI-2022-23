import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Categories from "../../components/Store/Categories";
import RecommendedProducts from "../../components/Store/RecommendedProducts";
import MobileRecommended from "../../components/Store/MobileRecommended";

const Store = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <Categories />
      <div className="sm:hidden">
        <RecommendedProducts />
      </div>
      <div className="md:hidden">
        <MobileRecommended />
      </div>
    </HeaderFooterLayout>
  );
};

export default Store;
