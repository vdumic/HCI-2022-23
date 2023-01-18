import Link from "next/link";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { AiOutlineRight } from "react-icons/ai";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import { getAllProductSlugs, getProductBySlug } from "../../api/ContentfulAPI";

const ProductPage = ({ product }) => {
  return (
    <HeaderFooterLayout>
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6">
        <Link href={`/store/${product.roomSlug}`}>
          <p className="font-bold sm:text-2xl text-3xl text-[#777777]">
            {product.room}
          </p>
        </Link>
        <AiOutlineRight className="h-7 w-7 sm:inline sm:w-5 sm:h-5 lg:mt-1 sm:mt-2 text-[#777777]" />
        <Link href={`/store/category/${product.categorySlug}`}>
          <p className="font-bold sm:text-2xl text-3xl text-[#777777]">
            {product.category}
          </p>
        </Link>
        <AiOutlineRight className="h-7 w-7 sm:inline sm:w-5 sm:h-5 lg:mt-1 sm:mt-2" />
        <p className="font-bold sm:text-2xl text-3xl">{product.title}</p>
      </div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Image
        src={product.imagesCollection.items[0].url}
        width="500"
        height="500"
      />
    </HeaderFooterLayout>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const posts = await getAllProductSlugs();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const product = await getProductBySlug(slug);

  product.mdxSource = await serialize(product.description);
  product.mdxSource = await serialize(product.dimensions);
  delete product.description;
  delete product.dimensions;

  return {
    props: { product: product },
  };
}
