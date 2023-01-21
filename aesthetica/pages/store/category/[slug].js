import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

import {
  getAllCategorySlugs,
  getAllProductsByCategory,
} from "../../api/ContentfulAPI";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import StoreSearch from "../../../components/Store/StoreSearch";
import ItemsList from "../../../components/Store/Category/ItemsList";
import Filter from "../../../components/Filters/Filter";

const CategoryPage = ({ products }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6">
        <Link href={`/store/${products[0].roomSlug}`}>
          <p className="font-bold sm:text-2xl text-3xl text-[#777777]">
            {products[0].room}
          </p>
        </Link>
        <AiOutlineRight className="h-7 w-7 sm:inline sm:w-5 sm:h-5 lg:mt-1 sm:mt-2" />
        <p className="font-bold sm:text-2xl text-3xl">{products[0].category}</p>
      </div>
      <StoreSearch />
      <div className="flex flex-row">
        <Filter />
        <div className="flex justify-evenly sm:mx-8 mx-24 my-10">
          <ItemsList products={products} />
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
  const rooms = await getAllCategorySlugs();

  const paths = rooms.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const products = await getAllProductsByCategory(slug);

  return {
    props: { products: products },
  };
}
