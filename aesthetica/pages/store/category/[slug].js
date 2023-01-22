import { useState } from "react";
import Link from "next/link";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

import {
  getAllCategorySlugs,
  getAllProductsByCategory,
} from "../../api/ContentfulAPI";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import ItemsList from "../../../components/Store/Category/ItemsList";
import Filter from "../../../components/Filters/Filter";

const CategoryPage = ({ products }) => {
  const [showProducts, setShowProducts] = useState(products);
  const [filterValue, setFilterValue] = useState("");

  const handleInput = (e) => {
    setFilterValue(e.target.value);

    setShowProducts(
      e.target.value == ""
        ? products
        : products.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          })
    );
  };

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
      <div className="flex items-center max-w-xl lg:my-4 mx-auto bg-white sm:my-5 my-16 sm:mx-8">
        <input
          type="search"
          id="support-search"
          className="block w-full p-4 pl-10 text-m placeholder-gray-900 border-white"
          placeholder="Search products..."
          value={filterValue}
          onChange={handleInput}
          required
        />
        <button
          type="submit"
          className="bg-white right-2.5 bottom-2.5 text-black  px-4 py-2"
        >
          <AiOutlineSearch className="h-7 w-7 sm:inline cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-row">
        <Filter />
        <div className="flex justify-evenly sm:mx-8 mx-24 my-10">
          <ItemsList products={showProducts} />
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
