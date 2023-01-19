import Link from "next/link";
import Image from "next/image";

import { serialize } from "next-mdx-remote/serialize";
import { AiOutlineRight } from "react-icons/ai";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import { getAllProductSlugs, getProductBySlug } from "../../api/ContentfulAPI";
import ProductImages from "../../../components/Store/Product/ProductImages";
import ProductInformation from "../../../components/Store/Product/ProductInformation";
import ProductDescription from "../../../components/Store/Product/ProductDescription";
import ProductDimensions from "../../../components/Store/Product/ProductDimensions";

const ProductPage = ({ product }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6">
        <Link href={`/store/${product.roomSlug}`}>
          <p className="font-bold sm:text-base text-2xl text-[#777777]">
            {product.room}
          </p>
        </Link>
        <AiOutlineRight className="h-6 w-7 pt-1 sm:inline sm:w-4 sm:h-4 lg:mt-1 sm:mt-1 text-[#777777]" />
        <Link href={`/store/category/${product.categorySlug}`}>
          <p className="font-bold sm:text-base text-2xl text-[#777777]">
            {product.category}
          </p>
        </Link>
        <AiOutlineRight className="h-6 w-7 pt-1 sm:inline sm:w-4 sm:h-4 lg:mt-1 sm:mt-1" />
        <p className="font-bold sm:text-base text-2xl">{product.title}</p>
      </div>
      <div className="grid grid-cols-2 justify-start sm:col-span-1 sm:grid-cols-1 sm:mx-8 my-4 lg:mx-24">
        <ProductImages images={product.imagesCollection.items} />
        <ProductInformation title={product.title} price={product.price} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col lg:mx-24 sm:mx-8 mb-8">
          <ProductDescription product={product} />
          <ProductDimensions product={product} />
        </div>
        <Image
          src={product.model.url}
          width="500"
          height="500"
          className="m-5 mr-28 sm:hidden"
        />
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

  product.mdxDescription = await serialize(product.description);
  product.mdxDimensions = await serialize(product.dimensions);
  delete product.description;
  delete product.dimensions;

  return {
    props: { product: product },
  };
}
