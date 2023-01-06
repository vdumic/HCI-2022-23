import BigPost from "../../components/Blog/BigPost";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";

const Blog = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center my-10">
        <p className="font-semibold text-5xl">BLOG</p>
      </div>
      <div className="flex justify-center my-10">
        <BigPost />
      </div>
    </HeaderFooterLayout>
  );
};

export default Blog;
