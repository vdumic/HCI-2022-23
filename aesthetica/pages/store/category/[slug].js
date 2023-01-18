import { getAllCategorySlugs } from "../../api/ContentfulAPI";

const CategoryPage = () => {};

export default CategoryPage;

export async function getStaticPaths() {
  const rooms = await getAllCategorySlugs();

  const paths = rooms.map((category) => ({
    params: { slug: category.slug },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
