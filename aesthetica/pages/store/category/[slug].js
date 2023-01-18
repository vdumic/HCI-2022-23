import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import {
  getAllCategorySlugs,
  getAllProductsByCategory,
} from "../../api/ContentfulAPI";

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
        <Link href={`/store/category/${products[0].categorySlug}`}>
          <p className="font-bold sm:text-2xl text-3xl">
            {products[0].category}
          </p>
        </Link>
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
