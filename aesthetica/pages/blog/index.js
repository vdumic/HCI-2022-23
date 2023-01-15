import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import BigPost from "../../components/Blog/BigPost";
import MediumPost from "../../components/Blog/MediumPost";
import SmallPost from "../../components/Blog/SmallPost";
import PostMobile from "../../components/Blog/PostMobile";

import Image1 from "../../public/assets/blog1.png";
import Image2 from "../../public/assets/blog2.png";
import Image3 from "../../public/assets/blog3.png";
import Image4 from "../../public/assets/blog4.png";
import { getAllPosts } from "../api/ContentfulAPI";

const Blog = ({ blogPosts }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center mt-10 mb-6 sm:my-4">
        <p className="font-semibold text-5xl sm:text-4xl">BLOG</p>
      </div>

      <div className="desktop-blog sm:hidden">
        <div className="grid grid-cols-12 mx-24 gap-x-10">
          <div className="grid col-span-7">
            <BigPost
              title={blogPosts[blogPosts.length - 5].title}
              date={blogPosts[blogPosts.length - 5].date}
              image={blogPosts[blogPosts.length - 5].image.url}
              path={blogPosts[blogPosts.length - 5].slug}
            />
          </div>
          <div className="grid col-span-5">
            <MediumPost
              title={blogPosts[blogPosts.length - 4].title}
              date={blogPosts[blogPosts.length - 4].date}
              image={blogPosts[blogPosts.length - 4].image.url}
              path={blogPosts[blogPosts.length - 4].slug}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 mx-24 gap-x-10">
          <div className="grid col-span-4">
            <SmallPost
              className="grid col-span-4"
              title={blogPosts[blogPosts.length - 3].title}
              date={blogPosts[blogPosts.length - 3].date}
              image={blogPosts[blogPosts.length - 3].image.url}
              path={blogPosts[blogPosts.length - 3].slug}
            />
          </div>
          <div className="grid col-span-4">
            <SmallPost
              className="grid col-span-4"
              title={blogPosts[blogPosts.length - 2].title}
              date={blogPosts[blogPosts.length - 2].date}
              image={blogPosts[blogPosts.length - 2].image.url}
              path={blogPosts[blogPosts.length - 2].slug}
            />
          </div>
          <div className="grid col-span-4">
            <SmallPost
              title={blogPosts[blogPosts.length - 1].title}
              date={blogPosts[blogPosts.length - 1].date}
              image={blogPosts[blogPosts.length - 1].image.url}
              path={blogPosts[blogPosts.length - 1].slug}
            />
          </div>
        </div>
        <div className="flex justify-center my-20">
          <Link href="/under_construction">
            <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
              <p>Older posts</p>
              <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center my-4 md:hidden">
        {blogPosts.map((post) => (
          <PostMobile
            title={post.title}
            date={post.date}
            image={post.image.url}
            path={post.slug}
            key={post.title}
          />
        ))}

        <div className="flex justify-center mt-8 mb-4">
          <Link href="/under_construction">
            <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-m font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
              <p>Older posts</p>
              <SlArrowRight className="h-5 w-5 cursor-pointer pt-1" />
            </button>
          </Link>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogPosts = await getAllPosts();

  return {
    props: { blogPosts: blogPosts },
  };
}
