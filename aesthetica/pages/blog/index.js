import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import BigPost from "../../components/Blog/BigPost";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";

const Blog = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center my-10">
        <p className="font-semibold text-5xl">BLOG</p>
      </div>
      <div className="flex justify-center my-10">
        <div>
          <BigPost />
          <div className="flex justify-center mt-10">
            <Link href="/blog/older">
              <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
                <p>Older posts</p>
                <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Blog;
