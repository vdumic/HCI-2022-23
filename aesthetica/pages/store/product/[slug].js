import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import { getAllProductSlugs, getProductBySlug } from "../../api/ContentfulAPI";

const ProductPage = ({ product }) => {
  return (
    <HeaderFooterLayout>
      <p>{product.title}</p>
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

  return {
    props: { product: product },
  };
}
