import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Categories from "../../components/Store/Categories";
import StoreSearch from "../../components/Store/StoreSearch";

const Store = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <Categories />
      <StoreSearch />
    </HeaderFooterLayout>
  );
};

export default Store;
