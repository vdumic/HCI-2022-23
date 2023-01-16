import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import StoreSearch from "../../components/Store/StoreSearch";
import ItemsList from "../../components/Store/Category/ItemsList";

import { getAllProductsByRoom, getAllRoomSlugs } from "../api/ContentfulAPI";

const StorePage = ({ products }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 md:my-10 sm:my-6">
        <Link href={`/store/${products[0].room}`}>
          <p className="font-bold sm:text-2xl text-3xl text-[#777777]">
            {products[0].room}
          </p>
        </Link>
        <AiOutlineRight className="h-7 w-7 sm:inline sm:w-5 sm:h-5 md:mt-1 sm:mt-2" />
        <p className="font-bold sm:text-2xl text-3xl">{products[0].category}</p>
      </div>
      <StoreSearch />
      <div className="flex justify-evenly sm:mx-8 mx-24 my-10">
        <ItemsList products={products} />
      </div>
      <div className="flex justify-center my-10">
        <Link href={`/store/${products[0].room}`}>
          <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
            <p>Load more</p>
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
          </button>
        </Link>
      </div>
    </HeaderFooterLayout>
  );
};

export default StorePage;

export async function getStaticPaths() {
  const rooms = await getAllRoomSlugs();

  const paths = rooms.map((room) => ({
    params: { slug: room.slug },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const products = await getAllProductsByRoom(slug);

  return {
    props: { products: products },
  };
}
