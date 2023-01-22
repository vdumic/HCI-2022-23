import { useState } from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";

import {
  getAllCategoriesByRoom,
  getAllRoomSlugs,
  getAllProductsByRoom,
} from "../api/ContentfulAPI";

import CategoriesSlider from "../../components/Store/Category/Room/CategoriesSlider";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import ItemsList from "../../components/Store/Category/ItemsList";
import Filter from "../../components/Filters/Filter";

const RoomPage = ({ products, categories }) => {
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
        <p className="font-bold sm:text-2xl text-3xl">{categories[0].room}</p>
      </div>
      <CategoriesSlider categories={categories} />
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
      <div className="flex justify-center my-10">
        <Link href={`/store/${products[0].roomSlug}`}>
          <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
            <p>Load more</p>
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
          </button>
        </Link>
      </div>
    </HeaderFooterLayout>
  );
};

export default RoomPage;

export async function getStaticPaths() {
  const rooms = await getAllRoomSlugs();

  const paths = rooms.map((room) => ({
    params: { slug: room.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const products = await getAllProductsByRoom(slug);
  const categories = await getAllCategoriesByRoom(slug);

  return {
    props: { products: products, categories: categories },
  };
}
