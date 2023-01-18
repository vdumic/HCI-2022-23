import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import {
  getAllCategorySlugs,
  getAllProductsByCategory,
} from "../../api/ContentfulAPI";

const CategoryPage = ({ products }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div>CATEGORY</div>
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
