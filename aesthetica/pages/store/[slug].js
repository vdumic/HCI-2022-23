import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

import CategoriesSlider from "../../components/Store/Category/Room/CategoriesSlider";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import StoreSearch from "../../components/Store/StoreSearch";
import ItemsList from "../../components/Store/Category/ItemsList";
import {
  getAllCategoriesByRoom,
  getAllRoomSlugs,
  getAllProductsByRoom,
} from "../api/ContentfulAPI";

const RoomPage = ({ products, categories }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6">
        <p className="font-bold sm:text-2xl text-3xl">{categories[0].room}</p>
      </div>
      <CategoriesSlider categories={categories} />
      <StoreSearch />
      <div className="flex justify-evenly sm:mx-8 mx-24 my-10">
        <ItemsList products={products} />
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
