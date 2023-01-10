import Post from "../../components/Blog/Post/Post";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";

import Image from "../../assets/blog1.png";

const BlogPost = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center my-10">
        <Post
          title="Interior Design Trends for the Holiday Season."
          date="December 16, 2022"
          image={Image}
        />
      </div>
    </HeaderFooterLayout>
  );
};

export default BlogPost;
