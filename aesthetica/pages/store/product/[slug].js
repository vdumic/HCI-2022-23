import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { AiOutlineRight } from "react-icons/ai";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import { getAllProductSlugs, getProductBySlug } from "../../api/ContentfulAPI";
import ProductImages from "../../../components/Store/Product/ProductImages";
import ProductInformation from "../../../components/Store/Product/ProductInformation";

const ProductPage = ({ product }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
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
      <div className="flex justify-evenly my-4">
        <ProductImages images={product.imagesCollection.items} />
        <ProductInformation title={product.title} price={product.price} />
      </div>
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
